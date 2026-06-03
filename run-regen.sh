#!/usr/bin/env bash
#
# Run the WHOLE type-generation flow end-to-end:
#   1. ensure inputs   — references/liquidbounce (LB source) + the generator submodule
#   2. regenerate      — build the generator shadow jar, run LiquidBounce headless
#                        (xvfb + llvmpipe) so ts-defgen.js introspects the live class
#                        graph → tools/regen-output/. regen-types.sh then runs
#                        post-patches.sh (apply-kdoc + fix-binding-types) over it.
#   3. promote         — copy the post-processed tree into typings/, keeping the
#                        hand-curated typings/package.json + the hand-maintained
#                        typings/__smoke + tsconfig.json.
#
# The headless client run is slow (~50–60 min on Mesa softpipe). Usage:
#   ./run-regen.sh [--no-promote] [--no-regen]
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PACKAGE_NAME="@ccbluex/liquidbounce-script-api"

PROMOTE=1
REGEN_ARGS=()
for a in "$@"; do
  case "$a" in
    --no-promote) PROMOTE=0 ;;
    --no-regen)   REGEN_ARGS+=(--no-regen) ;;
    -h|--help)    sed -n '2,16p' "$0"; exit 0 ;;
    *) echo "unknown arg: $a" >&2; exit 2 ;;
  esac
done

echo "==> [1/3] inputs: references + generator submodule"
"$REPO_ROOT/fetch-references.sh"
git -C "$REPO_ROOT" submodule update --init generator 2>/dev/null || true

echo "==> [2/3] regenerate (+ apply-kdoc + fix-binding via post-patches)"
"$REPO_ROOT/tools/regen-types.sh" "${REGEN_ARGS[@]}"

OUT="$REPO_ROOT/tools/regen-output/$PACKAGE_NAME"
[[ -d "$OUT" ]] || { echo "FAIL: no regen output at $OUT" >&2; exit 1; }

if [[ "$PROMOTE" == "1" ]]; then
  echo "==> [3/3] promote → typings/ (diff vs current, package.json excluded):"
  diff -rq --exclude=package.json "$OUT/" "$REPO_ROOT/typings/" 2>/dev/null | head -40 || true
  # Sync ambient/augmentations/types with --delete so stale files (e.g. old
  # bundled-kotlin internals) are removed; leave the hand-maintained
  # package.json, __smoke/, and tsconfig.json untouched.
  for d in ambient augmentations types; do
    rsync -a --delete "$OUT/$d/" "$REPO_ROOT/typings/$d/"
  done
  echo "Promoted into typings/ ($(find "$REPO_ROOT/typings/types" -name '*.d.ts' | wc -l) .d.ts)."
  # Stamp the package version to the LiquidBounce build these types were made for.
  node "$REPO_ROOT/scripts/stamp-version.mjs"
else
  echo "==> [3/3] promote skipped (--no-promote). Output in $OUT"
fi
echo "Done."
