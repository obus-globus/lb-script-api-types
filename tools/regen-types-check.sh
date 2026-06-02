#!/usr/bin/env bash
#
# Compare the regen output tree against our committed self-baseline at
# typings/. Exits 0 on match; non-zero on unexpected
# diffs with a diff dump for debugging.
#
# Usage:
#   tools/regen-types-check.sh [--no-regen]
#
# --no-regen (default) assumes tools/regen-output/ is already populated by a
# prior `tools/regen-types.sh` run. Without --no-regen this script will
# invoke regen-types.sh first — slow, only useful ad-hoc.
#
# Pipeline note: as of phase 5.2 the gate is a *rolling self-baseline* —
# regen output is compared against the committed `typings/`
# tree (which itself was produced by an earlier regen + hand-curated
# package.json). This is the right metric because Phase 5.2+ intentionally
# diverges from CCBlueX's last-published npm package (void rename,
# augmentations index, etc.). The committed tree advances when a regen
# is intentionally promoted — diffs against it then highlight unintended
# drift.
#
# package.json is excluded from the diff entirely (the committed one is
# hand-curated each time we promote — different name, private flag,
# version pin form). The regen-emitted version string is surfaced
# informationally for sanity.
#
# On drift: run `tools/regen-types.sh` to regenerate, inspect the diff,
# then `bash tools/promote-regen.sh` (or manually copy the output tree
# into typings/) to promote it as the new baseline.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

NO_REGEN=1
for arg in "$@"; do
  case "$arg" in
    --no-regen) NO_REGEN=1 ;;
    --regen) NO_REGEN=0 ;;
    -h|--help) sed -n '2,16p' "$0"; exit 0 ;;
    *) echo "Unknown arg: $arg" >&2; exit 2 ;;
  esac
done

PACKAGE_NAME="@ccbluex/liquidbounce-script-api"
OUT_PKG="$REPO_ROOT/tools/regen-output/$PACKAGE_NAME"
BASE_PKG="$REPO_ROOT/typings"

if [[ "$NO_REGEN" == "0" ]]; then
  "$REPO_ROOT/tools/regen-types.sh"
fi

if [[ ! -d "$OUT_PKG" ]]; then
  echo "SKIP: regen output missing at $OUT_PKG; run tools/regen-types.sh first"
  exit 0
fi
if [[ ! -d "$BASE_PKG" ]]; then
  echo "FAIL: self-baseline missing at $BASE_PKG" >&2
  exit 1
fi

# Diff strategy: a full recursive diff, excluding package.json (hand-curated
# in the committed tree each promotion — see header).
tmp_diff="$(mktemp)"
trap 'rm -f "$tmp_diff"' EXIT

diff -rq --exclude=package.json --exclude=__smoke "$BASE_PKG" "$OUT_PKG" > "$tmp_diff" 2>&1 || true

unexpected=0
if [[ -s "$tmp_diff" ]]; then
  unexpected=1
fi

# Informational: surface the regen-emitted version string.
out_ver="$(grep -oE '"version":[[:space:]]*"[^"]*"' "$OUT_PKG/package.json" || true)"
if [[ -n "$out_ver" ]]; then
  echo "INFO: regen package.json $out_ver (committed tree is hand-curated, not diffed)"
fi

if [[ "$unexpected" == "0" ]]; then
  echo "OK: regen output matches committed self-baseline at $BASE_PKG"
  exit 0
fi

echo "FAIL: unexpected diffs between self-baseline and regen:" >&2

only_base="$(awk '/^Only in/ && $3 ~ /script-api-types/' "$tmp_diff" | wc -l)"
only_regen="$(awk '/^Only in/ && $3 ~ /regen-output/' "$tmp_diff" | wc -l)"
content_diff="$(awk '/^Files/' "$tmp_diff" | wc -l)"
echo "  totals: only-baseline=$only_base  only-regen=$only_regen  content-diffs=$content_diff" >&2
echo "  --- only-in-baseline by top-level (max 10) ---" >&2
awk '/^Only in/ && $3 ~ /script-api-types/ { sub(/:$/, "", $3); print $3"/"$4 }' "$tmp_diff" \
  | sed -E 's#.*/script-api-types/##' \
  | awk -F/ '{print $1"/"$2}' \
  | sort | uniq -c | sort -rn | head -n 10 >&2 || true
echo "  --- only-in-regen by top-level (max 10) ---" >&2
awk '/^Only in/ && $3 ~ /regen-output/ { sub(/:$/, "", $3); print $3"/"$4 }' "$tmp_diff" \
  | sed -E 's#.*/types/##' \
  | awk -F/ '{print $1"/"$2}' \
  | sort | uniq -c | sort -rn | head -n 10 >&2 || true
echo "  --- content-diff by top-level (max 10) ---" >&2
awk '/^Files/ { print $2 }' "$tmp_diff" \
  | sed -E 's#.*/types/##' \
  | awk -F/ '{print $1"/"$2}' \
  | sort | uniq -c | sort -rn | head -n 10 >&2 || true
echo "  --- first 40 raw lines (for drill-in) ---" >&2
head -n 40 "$tmp_diff" >&2
echo "" >&2
echo "  To refresh: run  bash tools/regen-types.sh" >&2
echo "  Then inspect the diff above, and if intentional," >&2
echo "  promote with: cp -r $OUT_PKG/. $BASE_PKG/" >&2
exit 1
