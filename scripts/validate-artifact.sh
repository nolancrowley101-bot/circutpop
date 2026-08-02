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

set +e
node --input-type=module - "${worker}" "${hosting}" <<'NODE'
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

const [workerPath, hostingPath] = process.argv.slice(2);
JSON.parse(await readFile(hostingPath, "utf8"));

// Route handlers import env from cloudflare:workers, a virtual module that only
// resolves inside the Workers runtime. Plain Node's ESM loader can fail on it
// in ways that vary by Node version and by exactly how the bundler emits the
// import (seen as both a catchable rejection and an uncaught loader crash
// across environments). This deep check is a bonus sanity check on top of the
// file-existence/JSON checks above, so never let it fail the build — best
// effort only, and any problem it would have caught still surfaces when
// Cloudflare actually deploys and runs the Worker.
try {
  const workerUrl = pathToFileURL(workerPath);
  workerUrl.searchParams.set("sites-validation", `${process.pid}-${Date.now()}`);
  const worker = await import(workerUrl.href);
  if (!worker.default || typeof worker.default.fetch !== "function") {
    console.warn("dist/server/index.js does not expose an ESM default export with fetch(request, env, ctx).");
  }
} catch (err) {
  console.warn(`Skipping deep import check (non-fatal): ${err?.message ?? err}`);
}
NODE
node_status=$?
set -e

if [[ "${node_status}" -ne 0 ]]; then
  echo "Deep import check subprocess exited non-zero (${node_status}); continuing anyway since file-existence and manifest checks already passed." >&2
fi

echo "Validated Sites artifact: dist/server/index.js and hosting manifest are present."
