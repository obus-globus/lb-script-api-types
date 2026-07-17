#!/usr/bin/env bash
#
# Packaging canary: prove the PACKED npm package works for a real consumer.
#
#   1. `npm pack` typings/ -> the exact tarball `npm publish` would ship.
#   2. Install it into a throwaway consumer project.
#   3. Pass 1: compile tools/package-canary/main.ts with a stock consumer
#      tsconfig (strict, lib es2023, skipLibCheck:true - what script authors
#      use) against the `ambient` + `registry-lb` entries. Fast (~15s).
#   4. Pass 2 (A18): compile tools/package-canary/main-full.ts against the
#      `ambient-full` entry, which pulls the full ~51k-entry registry-full
#      module graph into the program - the two published entries pass 1
#      never touches. Heavier (~2-3 min) and clearly labeled below.
#
# Catches files-glob / typesVersions / `types`-entry mistakes and silent
# `any` degradation that the in-repo gate can't see. No regen.
#
# Usage: tools/package-canary.sh
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TSC="$REPO_ROOT/node_modules/.bin/tsc"
[[ -x "$TSC" ]] || { echo "FAIL: typescript not installed - run npm install at the repo root" >&2; exit 2; }

WORK="$(mktemp -d /tmp/lb-types-canary.XXXXXX)"
trap 'rm -rf "$WORK"' EXIT

echo "==> npm pack typings/"
TARBALL="$(cd "$REPO_ROOT/typings" && npm pack --silent --pack-destination "$WORK")"
echo "    $TARBALL ($(du -h "$WORK/$(basename "$TARBALL")" | cut -f1))"

echo "==> install into a throwaway consumer"
cd "$WORK"
npm init -y >/dev/null 2>&1
npm install --silent --no-audit --no-fund "./$(basename "$TARBALL")" >/dev/null

cp "$REPO_ROOT/tools/package-canary/main.ts" .
cat > tsconfig.json <<'EOF'
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "moduleResolution": "node",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "lib": ["es2023"],
    "types": ["@wunk/lb-script-api-types/ambient", "@wunk/lb-script-api-types/registry-lb"],
    "forceConsistentCasingInFileNames": true
  },
  "include": ["main.ts"]
}
EOF

echo "==> pass 1: tsc (stock consumer config: ambient + registry-lb)"
if "$TSC" -p tsconfig.json; then
  echo "    pass 1 OK - ambient + registry-lb entries compile for a stock consumer"
else
  echo "package-canary: FAIL - the PACKED package is broken for consumers (see diagnostics above)" >&2
  exit 1
fi

# ---- Pass 2 (A18): the full-typing entries -------------------------------
# ambient-full.d.ts (a 2-line /// <reference> shim) and registry-full/index.d.ts
# (~51k Java.type entries) are compiled by NOTHING else in the repo - a broken
# reference path or a registry entry whose types/** target fell out of the
# files glob would ship silently without this pass.
#
# MEMORY: the registry's `typeof import(...)` graph pulls all ~62k shipped
# .d.ts into the program. Measured on this box: ~3.8 GB peak RSS with
# skipLibCheck:true (~2-3 min against the freshly-installed consumer copy).
# The VM has NO swap, so cap the node heap - worst case is a clean heap
# abort (canary FAIL), never a VM-wide OOM.
cp "$REPO_ROOT/tools/package-canary/main-full.ts" .
cat > tsconfig.full.json <<'EOF'
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "moduleResolution": "node",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true,
    "lib": ["es2023"],
    "types": ["@wunk/lb-script-api-types/ambient-full"],
    "forceConsistentCasingInFileNames": true
  },
  "include": ["main-full.ts"]
}
EOF

echo "==> pass 2: tsc (full-typing consumer config: ambient-full -> registry-full, ~62k .d.ts, ~2-3 min)"
if NODE_OPTIONS="--max-old-space-size=6144 ${NODE_OPTIONS-}" "$TSC" -p tsconfig.full.json; then
  echo "    pass 2 OK - ambient-full + registry-full entries compile for a consumer"
else
  echo "package-canary: FAIL - the ambient-full/registry-full entries of the PACKED package are broken (see diagnostics above)" >&2
  exit 1
fi

echo "package-canary: OK - packed package compiles for a stock consumer (both passes)"
