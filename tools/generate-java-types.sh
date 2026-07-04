#!/usr/bin/env bash
# Generate docs/refs/java-types.txt - an allowlist of fully-qualified class
# names reachable from LiquidBounce's runtime classpath + the JDK's jmods.
#
# Used by the LB-JAVA-TYPE-UNKNOWN L2 rule. See docs/40-tooling-architecture.md
# (or the rule header) for rationale on scanning jars directly rather than
# leaning on the `@ccbluex/liquidbounce-script-api` type package.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
CP_FILE="$REPO_ROOT/tools/script-runner/build/lb-runtime-classpath.txt"
DEVLIBS="$REPO_ROOT/references/liquidbounce/build/devlibs"
OUT="$REPO_ROOT/docs/refs/java-types.txt"

if [[ ! -f "$CP_FILE" ]]; then
  cat >&2 <<EOF
== SKIP: $CP_FILE is missing.
   Build the runtime-classpath cache first:
     $REPO_ROOT/tools/script-runner/run.sh --help  # triggers the cold build
     # or: $REPO_ROOT/tools/script-runner/gradlew -p tools/script-runner shadowJar
   Then re-run this script.
EOF
  exit 0
fi

mkdir -p "$(dirname "$OUT")"

TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

# --- 1. LB runtime classpath jars + LB dev jar --------------------------------
# The classpath file is a single line of colon-separated absolute jar paths.
{
  tr ':' '\n' < "$CP_FILE"
  # Also pull in the LB dev jar itself (its own classes aren't in the classpath
  # file because gradle treats them as the "output", not a dep).
  if compgen -G "$DEVLIBS/*.jar" >/dev/null 2>&1; then
    ls "$DEVLIBS"/*.jar
  fi
} | while IFS= read -r jar; do
  [[ -z "$jar" ]] && continue
  [[ -f "$jar" ]] || continue
  # unzip -l is faster + more forgiving than `jar tf` for non-jar zips.
  unzip -l "$jar" 2>/dev/null | awk '/\.class$/ {print $NF}' || true
done > "$TMP/classpath.raw"

CP_COUNT=$(wc -l < "$TMP/classpath.raw" | tr -d ' ')
echo "== scanned $CP_COUNT class entries from LB runtime classpath"

# --- 2. JDK jmods (java.*, javax.*, jdk.*) ------------------------------------
JMODS=""
if [[ -n "${JAVA_HOME:-}" && -d "$JAVA_HOME/jmods" ]]; then
  JMODS="$JAVA_HOME/jmods"
else
  # Prefer the JDK gradle used to build LB; fall back to anything with jmods.
  for candidate in \
    /opt/graalvm-jdk-21.0.10+8.1 \
    /usr/lib/jvm/java-21-openjdk-amd64 \
    /usr/lib/jvm/java-25-openjdk-amd64 \
  ; do
    if [[ -d "$candidate/jmods" ]]; then JMODS="$candidate/jmods"; break; fi
  done
fi

if [[ -z "$JMODS" ]]; then
  echo "== WARN: no JDK jmods/ directory found - java.*/jdk.*/javax.* will be missing from the allowlist."
  : > "$TMP/jdk.raw"
else
  echo "== scanning jmods at $JMODS"
  JMOD_TOOL=""
  for candidate in "$(dirname "$JMODS")/bin/jmod" "$(which jmod 2>/dev/null || true)"; do
    if [[ -n "$candidate" && -x "$candidate" ]]; then JMOD_TOOL="$candidate"; break; fi
  done
  if [[ -z "$JMOD_TOOL" ]]; then
    echo "== WARN: no jmod tool found alongside jmods/ - java.*/jdk.*/javax.* will be missing."
    : > "$TMP/jdk.raw"
  else
    : > "$TMP/jdk.raw"
    for jm in "$JMODS"/*.jmod; do
      [[ -f "$jm" ]] || continue
      "$JMOD_TOOL" list "$jm" 2>/dev/null \
        | awk '/^classes\/.*\.class$/ {sub(/^classes\//, "", $0); print}' \
        >> "$TMP/jdk.raw" || true
    done
  fi
fi

JDK_COUNT=$(wc -l < "$TMP/jdk.raw" | tr -d ' ')
echo "== scanned $JDK_COUNT class entries from JDK jmods"

# --- 3. Normalize, filter, dedupe --------------------------------------------
cat "$TMP/classpath.raw" "$TMP/jdk.raw" \
  | awk '
      /\.class$/ {
        sub(/\.class$/, "", $0)
        gsub(/\//, ".", $0)
        if ($0 ~ /^META-INF\./) next
        if ($0 ~ /(^|\.)(module-info|package-info)$/) next
        if (length($0) < 2) next
        print
      }
    ' \
  | LC_ALL=C sort -u > "$OUT"

TOTAL=$(wc -l < "$OUT" | tr -d ' ')
SIZE=$(du -h "$OUT" | cut -f1)
echo "== wrote $OUT ($TOTAL classes, $SIZE)"
