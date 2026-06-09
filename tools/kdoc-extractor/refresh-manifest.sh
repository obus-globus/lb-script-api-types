#!/usr/bin/env bash
# Regenerate tools/kdoc-extractor/manifest.json from the current
# LiquidBounce checkout, using the Kotlin-PSI extractor.
#
# Phase B of the T-Doc pipeline. Phase C (apply-kdoc.py inside
# post-patches.sh) consumes the committed manifest.json, so this
# script only needs to be re-run when the LB source's KDocs change
# (i.e. after `git pull` on references/liquidbounce).
#
# Why PSI: by-construction match with ts-generator's FQNs because
# both use kotlin-compiler-embeddable for parsing. See
# docs/upstream-type-issues/12-kotlin-lsp-extractor-poc.md.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
cd "$REPO_ROOT"

LB_DIR="${LB_DIR:-$REPO_ROOT/references/liquidbounce}"
OUT="${OUT:-$REPO_ROOT/tools/kdoc-extractor/manifest.json}"

EXTRACTOR_DIR="$REPO_ROOT/tools/kdoc-extractor/kotlinc"
EXTRACTOR_BIN="$EXTRACTOR_DIR/build/install/kdoc-extract-psi/bin/kdoc-extract-psi"

# kotlin-compiler-embeddable 2.0.x requires JDK <= 21; pick it
# automatically if the user hasn't pinned JAVA_HOME.
if [[ -z "${JAVA_HOME:-}" ]] || ! "$JAVA_HOME/bin/java" -version 2>&1 | grep -q "21\."; then
    for candidate in \
        /usr/lib/jvm/java-21-openjdk-amd64 \
        /usr/lib/jvm/temurin-21-jdk-amd64 \
        /usr/lib/jvm/java-1.21.0-openjdk-amd64 \
        ; do
        if [[ -d "$candidate" ]]; then
            export JAVA_HOME="$candidate"
            break
        fi
    done
fi
echo "Using JAVA_HOME=$JAVA_HOME"

# Build (idempotent — Gradle skips up-to-date tasks).
if [[ ! -x "$EXTRACTOR_BIN" ]]; then
    echo "Building kdoc-extract-psi (one-time, ~3 min on first run)..." >&2
fi
(cd "$EXTRACTOR_DIR" && ./gradlew installDist --no-daemon -q)

echo "Extracting KDocs from $LB_DIR..." >&2
"$EXTRACTOR_BIN" --project "$LB_DIR" --out "$OUT"

# Record which LB SHA this manifest reflects — run-regen.sh compares it to the
# checkout and auto-refreshes after a pin bump (the .manifest-sha is shared
# with refresh-signatures.sh; whichever runs last wins, both read $LB_DIR).
git -C "$LB_DIR" rev-parse HEAD > "$(dirname "$OUT")/.manifest-sha" 2>/dev/null || true

echo "Manifest written to $OUT" >&2
