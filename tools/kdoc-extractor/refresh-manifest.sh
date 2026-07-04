#!/usr/bin/env bash
# Regenerate tools/kdoc-extractor/manifest.json from the current
# LiquidBounce checkout, using the tree-sitter extractor (ts-extract.py).
#
# Phase B of the T-Doc pipeline. Phase C (apply-kdoc.py inside
# post-patches.sh) consumes the committed manifest.json, so this script only
# needs re-running when the LB source's KDocs change (i.e. after `git pull` on
# references/liquidbounce).
#
# History: this used to shell out to a Kotlin-PSI extractor under
# `tools/kdoc-extractor/kotlinc/` (kdoc-extract-psi, kotlin-compiler-embeddable),
# which is gitignored and was never committed. It has since been replaced by the
# tree-sitter extractor `ts-extract.py` (see its header: "No 1.2 GB kotlin-lsp
# dependency"), which `refresh-signatures.sh` already uses. apply-kdoc.py accepts
# the flat `{fqn: entry}` manifest ts-extract emits (it handles both the flat and
# the older `{schemaVersion, entries}` shapes). No JVM, runs in ~2s.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$REPO_ROOT"

LB_DIR="${LB_DIR:-$REPO_ROOT/references/liquidbounce}"
OUT="${OUT:-$REPO_ROOT/tools/kdoc-extractor/manifest.json}"
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
    echo "FAIL: $LB_DIR has no src/main/kotlin - run ./fetch-references.sh first" >&2
    exit 2
fi

echo "Extracting KDocs from $LB_DIR ..." >&2
"$PY" "$EXTRACT" --project "$LB_DIR" --out "$OUT"
echo "Manifest written to $OUT" >&2

# Record which LB SHA this manifest reflects - run-regen.sh compares it to the
# checkout and auto-refreshes after a pin bump (the .manifest-sha is shared with
# refresh-signatures.sh; whichever runs last wins, both read $LB_DIR).
git -C "$LB_DIR" rev-parse HEAD > "$(dirname "$OUT")/.manifest-sha" 2>/dev/null || true
