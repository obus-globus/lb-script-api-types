#!/usr/bin/env bash
#
# Cut a release of @wunk/lb-script-api-types - the one human command between
# "regen PR merged" and "published on npm".
#
#   1. Preflight: clean tree on main, typecheck gate green, packaging canary
#      green (compiles the PACKED tarball as a stock consumer).
#   2. Read the ALREADY-STAMPED version. stamp-version.mjs (run during regen)
#      derives it - <lb-major>.<lb-minor>.<lb-patch*1000 + scriptBuild> - from LB
#      mod_version + the npm registry, so there is NO version bump here; the
#      number is already final and free. Tag it `v<version>`.
#   3. Push the tag and create the GitHub Release - which triggers
#      .github/workflows/npm-publish.yml (OIDC publish).
#
# Usage: scripts/cut-release.sh [--dry-run]
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"
DRY=0
[[ "${1:-}" == "--dry-run" ]] && DRY=1

echo "==> preflight: git state"
if [[ -n "$(git status --porcelain)" ]]; then
  echo "FAIL: working tree not clean - commit or stash first" >&2; exit 1
fi
BRANCH="$(git branch --show-current)"
if [[ "$BRANCH" != "main" ]]; then
  echo "FAIL: on branch '$BRANCH', releases cut from main" >&2; exit 1
fi
git fetch -q origin main
if [[ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ]]; then
  echo "FAIL: local main != origin/main - push/pull first" >&2; exit 1
fi

echo "==> preflight: typecheck gate"
npm run --silent typecheck

echo "==> preflight: packaging canary"
tools/package-canary.sh

VER="$(node -p "require('./typings/package.json').version")"

# The version is already stamped by regen and must be free on npm. Guard against
# an accidental re-release of a version that's already tagged/published (the
# publish workflow is idempotent, but fail early with a clear message).
if git rev-parse -q --verify "refs/tags/v$VER" >/dev/null; then
  echo "FAIL: tag v$VER already exists - regen a new LB build (stamp-version derives the next free build) before releasing." >&2
  exit 1
fi
if npm view "@wunk/lb-script-api-types@$VER" version >/dev/null 2>&1; then
  echo "FAIL: v$VER is already published to npm - nothing to release." >&2
  exit 1
fi

if [[ "$DRY" == "1" ]]; then
  echo "dry-run: would tag v$VER (already stamped), push, and create the GitHub Release."
  exit 0
fi

echo "==> tag v$VER (already-stamped version - no bump)"
git tag -a "v$VER" -m "v$VER" HEAD
git push origin main "v$VER"

echo "==> GitHub release v$VER (triggers npm-publish.yml)"
LB_BLOCK="$(node -p "JSON.stringify(require('./typings/package.json').liquidbounce, null, 2)")"
gh release create "v$VER" \
  --title "v$VER" \
  --notes "$(printf 'Types build %s.\n\nLiquidBounce provenance:\n```json\n%s\n```\nSee docs/improvements.md for what this package adds over the official types.' "$VER" "$LB_BLOCK")"

echo "Done - npm-publish.yml takes it from here (watch: gh run list --workflow npm-publish.yml)."
