#!/usr/bin/env bash
#
# Packaging canary: prove the PACKED npm package works for a real consumer.
#
#   1. `npm pack` typings/ → the exact tarball `npm publish` would ship.
#   2. Install it into a throwaway consumer project.
#   3. Compile tools/package-canary/main.ts with a stock consumer tsconfig
#      (strict, lib es2023, skipLibCheck:true — what script authors use).
#
# Catches files-glob / typesVersions / `types`-entry mistakes and silent
# `any` degradation that the in-repo gate can't see. Fast (~15s), no regen.
#
# Usage: tools/package-canary.sh
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TSC="$REPO_ROOT/node_modules/.bin/tsc"
[[ -x "$TSC" ]] || { echo "FAIL: typescript not installed — run npm install at the repo root" >&2; exit 2; }

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

echo "==> tsc (stock consumer config)"
if "$TSC" -p tsconfig.json; then
  echo "package-canary: OK — packed package compiles for a stock consumer"
else
  echo "package-canary: FAIL — the PACKED package is broken for consumers (see diagnostics above)" >&2
  exit 1
fi
