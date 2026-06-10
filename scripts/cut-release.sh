#!/usr/bin/env bash
#
# Cut a release of @wunk/lb-script-api-types — the one human command between
# "regen PR merged" and "published on npm".
#
#   1. Preflight: clean tree on main, typecheck gate green, packaging canary
#      green (compiles the PACKED tarball as a stock consumer).
#   2. `cd typings && npm version patch` — bumps the iteration (0.38.2 ->
#      0.38.3) and creates the `v0.38.3` git tag.
#   3. Push with tags and create the GitHub Release — which triggers
#      .github/workflows/npm-publish.yml (publish + lb-<minor> dist-tag).
#
# Usage: scripts/cut-release.sh [--dry-run]
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"
DRY=0
[[ "${1:-}" == "--dry-run" ]] && DRY=1

echo "==> preflight: git state"
if [[ -n "$(git status --porcelain)" ]]; then
  echo "FAIL: working tree not clean — commit or stash first" >&2; exit 1
fi
BRANCH="$(git branch --show-current)"
if [[ "$BRANCH" != "main" ]]; then
  echo "FAIL: on branch '$BRANCH', releases cut from main" >&2; exit 1
fi
git fetch -q origin main
if [[ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ]]; then
  echo "FAIL: local main != origin/main — push/pull first" >&2; exit 1
fi

echo "==> preflight: typecheck gate"
npm run --silent typecheck

echo "==> preflight: packaging canary"
tools/package-canary.sh

if [[ "$DRY" == "1" ]]; then
  CUR="$(node -p "require('./typings/package.json').version")"
  echo "dry-run: would bump $CUR -> patch+1, tag, push, and create the GitHub Release."
  exit 0
fi

echo "==> bump iteration + tag"
# npm version's git integration is unreliable from a subdirectory (it bumped
# package.json without committing once, and gh release create then auto-made
# the tag at a stale HEAD) — do the git half explicitly.
(cd typings && npm version --no-git-tag-version patch)
VER="$(node -p "require('./typings/package.json').version")"
git add typings/package.json
git commit -m "v$VER"
git tag -a "v$VER" -m "v$VER" HEAD
git push origin main "v$VER"

echo "==> GitHub release v$VER (triggers npm-publish.yml)"
LB_BLOCK="$(node -p "JSON.stringify(require('./typings/package.json').liquidbounce, null, 2)")"
gh release create "v$VER" \
  --title "v$VER" \
  --notes "$(printf 'Types build %s.\n\nLiquidBounce provenance:\n```json\n%s\n```\nSee docs/improvements.md for what this package adds over the official types.' "$VER" "$LB_BLOCK")"

echo "Done — npm-publish.yml takes it from here (watch: gh run list --workflow npm-publish.yml)."
