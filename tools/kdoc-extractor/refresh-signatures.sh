#!/usr/bin/env bash
# Regenerate tools/kdoc-extractor/signatures.json from the current
# LiquidBounce checkout (#12b — real parameter names + types).
#
# The signatures manifest carries the structured value-parameter list
# (name, type, nullable, vararg, receiver) for every function/constructor,
# keyed by the FQN ts-generator emits the declaration onto. Phase C
# (apply-signatures.py inside post-patches.sh) consumes the committed
# signatures.json to rename the generated `paramargN` placeholders, so this
# only needs re-running when the LB source signatures change (i.e. after a
# `git pull` on references/liquidbounce).
#
# Uses the tree-sitter extractor (ts-extract.py): no JVM, runs in ~2s.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$REPO_ROOT"

LB_DIR="${LB_DIR:-$REPO_ROOT/references/liquidbounce}"
OUT="${OUT:-$REPO_ROOT/tools/kdoc-extractor/signatures.json}"
DEPS_OUT="${DEPS_OUT:-$REPO_ROOT/tools/kdoc-extractor/deprecations.json}"
VENV="${VENV:-$REPO_ROOT/tools/kdoc-extractor/.venv-ts}"
EXTRACT="$REPO_ROOT/tools/kdoc-extractor/ts-extract.py"

# Bootstrap the tree-sitter venv on first run.
PY="$VENV/bin/python3"
if [[ ! -x "$PY" ]]; then
    echo "Creating tree-sitter venv at $VENV ..." >&2
    python3 -m venv "$VENV"
    "$VENV/bin/pip" install -q tree-sitter tree-sitter-kotlin
fi

if [[ ! -d "$LB_DIR/src/main/kotlin" ]]; then
    echo "FAIL: $LB_DIR has no src/main/kotlin — run ./fetch-references.sh first" >&2
    exit 2
fi

echo "Extracting signatures + deprecations from $LB_DIR ..." >&2
"$PY" "$EXTRACT" --project "$LB_DIR" --signatures-out "$OUT" --deprecations-out "$DEPS_OUT"
echo "Signatures written to $OUT; deprecations to $DEPS_OUT" >&2

# Record which LB SHA these manifests reflect (see refresh-manifest.sh).
git -C "$LB_DIR" rev-parse HEAD > "$(dirname "$OUT")/.manifest-sha" 2>/dev/null || true
