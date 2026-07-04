#!/usr/bin/env bash
# Ensure decompiled Minecraft sources are available under references/minecraft-sources/.
#
# Uses fabric-loom's `genSources` task in the vendored LiquidBounce reference build
# (it pins MC via gradle/libs.versions.toml - currently 1.21.11). Extracts the
# resulting sources jar into references/minecraft-sources/ for easy grep/search
# access by tooling and sub-agents.
#
# Idempotent: if sources already look present and appear newer than the jar, skip.
# Gracefully skips (exit 0) if Gradle / loom isn't available.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LB_DIR="$REPO_ROOT/references/liquidbounce"
OUT_DIR="$REPO_ROOT/references/minecraft-sources"

if [[ ! -x "$LB_DIR/gradlew" ]]; then
  echo "decompile-minecraft: $LB_DIR/gradlew not found - skipping (run update-refs.sh first)."
  exit 0
fi

if ! command -v java >/dev/null 2>&1; then
  echo "decompile-minecraft: java not available - skipping."
  exit 0
fi

mc_version=$(grep -E '^minecraft\s*=' "$LB_DIR/gradle/libs.versions.toml" | head -1 | sed -E 's/.*"([^"]+)".*/\1/' || echo unknown)
echo "decompile-minecraft: MC version (per libs.versions.toml) = ${mc_version}"

# Locate existing sources jar before running the task - skip gradle if already present.
sources_jar=$(ls "$LB_DIR"/.gradle/loom-cache/minecraftMaven/net/minecraft/minecraft-merged-*/*/minecraft-merged-*-sources.jar 2>/dev/null | head -1 || true)

if [[ -z "$sources_jar" ]]; then
  echo "decompile-minecraft: running ./gradlew genSources in $LB_DIR (this can take a few minutes)..."
  if ! (cd "$LB_DIR" && ./gradlew -q genSources); then
    echo "decompile-minecraft: genSources failed - skipping extraction."
    exit 0
  fi
  sources_jar=$(ls "$LB_DIR"/.gradle/loom-cache/minecraftMaven/net/minecraft/minecraft-merged-*/*/minecraft-merged-*-sources.jar 2>/dev/null | head -1 || true)
fi

if [[ -z "$sources_jar" ]]; then
  echo "decompile-minecraft: no sources jar found after genSources - bailing."
  exit 0
fi

echo "decompile-minecraft: sources jar: $sources_jar"

# If destination already has java files and is newer than the jar, skip extraction.
if [[ -d "$OUT_DIR" ]] \
  && [[ "$(find "$OUT_DIR" -name '*.java' -print -quit 2>/dev/null)" != "" ]] \
  && [[ "$OUT_DIR" -nt "$sources_jar" ]]; then
  java_count=$(find "$OUT_DIR" -name '*.java' | wc -l)
  echo "decompile-minecraft: $OUT_DIR already has $java_count .java files (newer than jar) - skipping extraction."
else
  mkdir -p "$OUT_DIR"
  # Wipe only the java source trees (keep META-INF if anything cares).
  rm -rf "$OUT_DIR"/net "$OUT_DIR"/com "$OUT_DIR"/META-INF
  echo "decompile-minecraft: extracting into $OUT_DIR..."
  unzip -qo "$sources_jar" -d "$OUT_DIR"
  touch "$OUT_DIR"
fi

java_count=$(find "$OUT_DIR" -name '*.java' | wc -l)
echo "decompile-minecraft: $java_count .java files available at $OUT_DIR"
echo "decompile-minecraft: source path env var MC_SOURCES=$OUT_DIR"
