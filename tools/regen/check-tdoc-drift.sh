#!/usr/bin/env bash
#
# T-Doc drift gate (backlog item #10).
#
# Re-runs the kdoc-extractor against the current references/liquidbounce
# checkout and verifies the committed manifest is up-to-date. Also re-runs
# apply-kdoc against the committed types/ tree and verifies no diff —
# catches the case where someone bumped manifest.json but forgot to apply
# (or where post-patches.sh logic drifted from apply-kdoc.py output).
#
# Intended callers:
#   - tools/check.sh (local CI matrix)
#   - .github/workflows/t-doc-drift.yml (GitHub Actions)
#
# Behavior:
#   - Exits 0 on no drift.
#   - Exits 1 on drift, printing the offending paths and a short diff.
#   - Exits 2 on tool/setup failure (extractor unbuilt, JDK missing, etc).
#
# Side effects: NONE. Runs the extractor into a temp file and uses
# `git diff --no-index` against the committed manifest; never mutates
# tracked files. apply-kdoc is run against a worktree-relative copy.
#
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$REPO_ROOT"

EXTRACTOR_BIN="$REPO_ROOT/tools/kdoc-extractor/kotlinc/build/install/kdoc-extract-psi/bin/kdoc-extract-psi"
COMMITTED_MANIFEST="$REPO_ROOT/tools/kdoc-extractor/manifest.json"
APPLY_SCRIPT="$REPO_ROOT/tools/regen/apply-kdoc.py"
LB_DIR="$REPO_ROOT/references/liquidbounce"

# Sanity checks.
if [[ ! -d "$LB_DIR" ]]; then
    echo "tdoc-drift: SKIP — references/liquidbounce missing (need submodule init)" >&2
    exit 0
fi
if [[ ! -x "$EXTRACTOR_BIN" ]]; then
    echo "tdoc-drift: SKIP — extractor not built; run tools/kdoc-extractor/refresh-manifest.sh to build" >&2
    exit 0
fi
if [[ ! -f "$APPLY_SCRIPT" ]]; then
    echo "tdoc-drift: FAIL — apply-kdoc.py missing at $APPLY_SCRIPT" >&2
    exit 2
fi

# Stage 1 — regenerate manifest into a temp path, diff against committed.
TMP_DIR="$(mktemp -d)"
trap 'rm -rf "$TMP_DIR"' EXIT
FRESH_MANIFEST="$TMP_DIR/manifest.json"

echo "tdoc-drift: regenerating manifest from $LB_DIR ..." >&2
# Auto-pin JDK 21 if available (kotlin-compiler-embeddable 2.0.x requires <= 21).
if [[ -z "${JAVA_HOME:-}" ]] || ! "${JAVA_HOME}/bin/java" -version 2>&1 | grep -q "21\."; then
    for candidate in \
        /usr/lib/jvm/java-21-openjdk-amd64 \
        /usr/lib/jvm/temurin-21-jdk-amd64 \
        /usr/lib/jvm/java-1.21.0-openjdk-amd64 \
        ; do
        if [[ -d "$candidate" ]]; then export JAVA_HOME="$candidate"; break; fi
    done
fi
"$EXTRACTOR_BIN" --project "$LB_DIR" --out "$FRESH_MANIFEST" >&2

if ! git --no-pager diff --no-index --exit-code -- "$COMMITTED_MANIFEST" "$FRESH_MANIFEST" >/tmp/tdoc-manifest.diff 2>&1; then
    echo "tdoc-drift: FAIL — committed manifest is stale vs LB HEAD" >&2
    echo "  → run tools/kdoc-extractor/refresh-manifest.sh and commit the result" >&2
    echo "  (first 60 lines of diff:)" >&2
    head -60 /tmp/tdoc-manifest.diff >&2 || true
    exit 1
fi
echo "tdoc-drift: manifest matches LB HEAD ✓" >&2

# Stage 2 — re-apply kdoc to a snapshot of typings and
# verify no changes. Catches drift between manifest entries and what's
# currently injected (e.g. someone hand-edited a TSDoc block, or
# apply-kdoc.py was changed without re-applying).
APPLIED_COPY="$TMP_DIR/script-api-types"
cp -r "$REPO_ROOT/typings" "$APPLIED_COPY"

python3 "$APPLY_SCRIPT" "$APPLIED_COPY" "$COMMITTED_MANIFEST" >&2

if ! git --no-pager diff --no-index --exit-code -- \
        "$REPO_ROOT/typings/types" \
        "$APPLIED_COPY/types" >/tmp/tdoc-apply.diff 2>&1; then
    echo "tdoc-drift: FAIL — committed types/ doesn't match apply-kdoc output" >&2
    echo "  → run: python3 tools/regen/apply-kdoc.py typings tools/kdoc-extractor/manifest.json" >&2
    echo "  (first 80 lines of diff:)" >&2
    head -80 /tmp/tdoc-apply.diff >&2 || true
    exit 1
fi
echo "tdoc-drift: apply-kdoc output matches committed types ✓" >&2

echo "tdoc-drift: OK"
exit 0
