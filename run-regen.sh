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

# Source-enrichment manifests must reflect the checked-out LB source: refresh
# them automatically after a pin bump (.manifest-sha is written by the
# refresh scripts). SKIP_MANIFEST_REFRESH=1 to override (e.g. kotlinc-less CI).
MANIFEST_SHA_FILE="$REPO_ROOT/tools/kdoc-extractor/.manifest-sha"
REF_HEAD="$(git -C "$REPO_ROOT/references/liquidbounce" rev-parse HEAD)"
if [[ "${SKIP_MANIFEST_REFRESH:-0}" == "1" ]]; then
  echo "==> manifest refresh skipped (SKIP_MANIFEST_REFRESH=1)"
elif [[ -f "$MANIFEST_SHA_FILE" && "$(cat "$MANIFEST_SHA_FILE")" == "$REF_HEAD" ]]; then
  echo "==> manifests current for LB $REF_HEAD"
else
  echo "==> manifests stale (recorded: $(cat "$MANIFEST_SHA_FILE" 2>/dev/null || echo none); LB at $REF_HEAD) — refreshing"
  "$REPO_ROOT/tools/kdoc-extractor/refresh-manifest.sh"
  "$REPO_ROOT/tools/kdoc-extractor/refresh-signatures.sh"
fi

echo "==> [2/3] regenerate (+ apply-kdoc + fix-binding via post-patches)"
"$REPO_ROOT/tools/regen-types.sh" "${REGEN_ARGS[@]}"

OUT="$REPO_ROOT/tools/regen-output/$PACKAGE_NAME"
[[ -d "$OUT" ]] || { echo "FAIL: no regen output at $OUT" >&2; exit 1; }

if [[ "$PROMOTE" == "1" ]]; then
  echo "==> [3/3] promote → typings/ (diff vs current, package.json excluded):"
  # Provenance gate: the output tree must have been generated from the SHA
  # references/liquidbounce is checked out at NOW — stamp-version.mjs derives
  # the package's `liquidbounce` block from the live checkout, so a stale
  # output (regen'd before a pin bump) would otherwise ship with a lying
  # provenance stamp.
  GEN_FROM_FILE="$REPO_ROOT/tools/regen-output/.generated-from"
  REF_SHA="$(git -C "$REPO_ROOT/references/liquidbounce" rev-parse HEAD)"
  if [[ -f "$GEN_FROM_FILE" ]]; then
    GEN_SHA="$(head -n1 "$GEN_FROM_FILE")"
    if [[ "$GEN_SHA" != "$REF_SHA" ]]; then
      echo "FAIL: tools/regen-output was generated from LB $GEN_SHA but references/liquidbounce is at $REF_SHA — stale output. Re-run a full regen (or check out the matching LB SHA)." >&2
      exit 1
    fi
  else
    echo "WARN: $GEN_FROM_FILE missing (output predates provenance stamping); stamping from the live checkout." >&2
  fi
  # All three synced dirs must exist up front — discovering one missing
  # mid-loop would abort after --delete already ran on the earlier dirs,
  # leaving typings/ a mixed old/new tree.
  for d in ambient augmentations types; do
    [[ -d "$OUT/$d" ]] || { echo "FAIL: $OUT/$d missing — refusing a partial promote" >&2; exit 1; }
  done
  # Surface anything the generator emits that the promote list would skip.
  for entry in "$OUT"/* "$OUT"/.[!.]*; do
    [[ -e "$entry" ]] || continue
    base="$(basename "$entry")"
    case "$base" in
      ambient|augmentations|types|package.json|tsconfig.json) ;;
      *) echo "WARN: regen output has unexpected top-level '$base' — NOT promoted (extend the promote list if intentional)" >&2 ;;
    esac
  done
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
  echo "==> post-promote drift gates"
  python3 "$REPO_ROOT/tools/regen/check-augmentation-drift.py"
  python3 "$REPO_ROOT/tools/regen/check-ambient-contract.py" "$REPO_ROOT/typings"
  python3 "$REPO_ROOT/tools/regen/events-doc-report.py" || \
    echo "WARN: events-doc-report failed (informational only)" >&2
  echo "==> typecheck gate (auto-tightening shrunken ratchets)"
  (cd "$REPO_ROOT" && node tools/typecheck.mjs --tighten)
  echo "==> packaging canary"
  "$REPO_ROOT/tools/package-canary.sh"
else
  echo "==> [3/3] promote skipped (--no-promote). Output in $OUT"
fi
echo "Done."
