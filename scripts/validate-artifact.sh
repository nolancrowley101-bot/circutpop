#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

worker="${SITES_PROJECT_ROOT}/dist/server/index.js"
hosting="${SITES_PROJECT_ROOT}/dist/.openai/hosting.json"

[[ -f "${worker}" ]] || {
  echo "Missing Sites Worker entry: dist/server/index.js" >&2
  exit 66
}
[[ -f "${hosting}" ]] || {
  echo "Missing packaged Sites manifest: dist/.openai/hosting.json" >&2
  exit 66
}

node --input-type=module - "${worker}" "${hosting}" <<'NODE'
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const [workerPath, hostingPath] = process.argv.slice(2);
JSON.parse(await readFile(hostingPath, "utf8"));

const workerSource = await readFile(workerPath, "utf8");
if (/["']cloudflare:[a-z-]+["']/.test(workerSource)) {
  // The worker references a cloudflare: virtual module (e.g. cloudflare:workers
  // for env access in route handlers). That scheme only resolves inside the
  // Workers runtime, not plain Node's ESM loader, so importing it here would
  // crash the loader rather than raise a catchable error. Skip the deep check.
  console.warn(
    "Skipping deep import check: worker references a cloudflare: virtual module, which only resolves inside the Workers runtime, not plain Node."
  );
} else {
  const workerUrl = pathToFileURL(workerPath);
  workerUrl.searchParams.set("sites-validation", `${process.pid}-${Date.now()}`);
  const worker = await import(workerUrl.href);
  if (!worker.default || typeof worker.default.fetch !== "function") {
    throw new Error("dist/server/index.js must have an ESM default export with fetch(request, env, ctx)");
  }
}
NODE

echo "Validated Sites artifact: ESM Worker default.fetch and hosting manifest are present."
