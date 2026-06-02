#!/usr/bin/env bash
#
# Regenerate the @liquidbounce-helper/script-api-types .d.ts tree by running
# LiquidBounce's own ts-defgen.js inside a real (xvfb-driven) client launch
# via Gradle. This mirrors CCBlueX's own CI workflow at
# references/liquidbounce/.github/workflows/generate-definitions.yml — the
# only substitution is that our forked ts-generator shadow jar is dropped
# in at the path ts-defgen.js loads from instead of being downloaded from
# CCBlueX's release repo.
#
# Usage:
#   tools/regen-types.sh [--verify] [--no-regen]
#
#     --verify    Regenerate then diff against the baseline package
#                 (packages/script-helper/node_modules/...).
#     --no-regen  Skip regen; assume tools/regen-output/ is already
#                 populated (used by check.sh gate #14).
#
# Output: tools/regen-output/@ccbluex/liquidbounce-script-api/
#
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

# Pin the LB SHA the generator was run against. Bumping is a deliberate
# action tied to regenerating the types package.
PINNED_SHA="fac52d9c85c85141cb327e00599cdf8e0a7afc66"

LB_DIR="$REPO_ROOT/references/liquidbounce"
TS_GEN_DIR="$REPO_ROOT/generator"
OUTPUT_DIR="$REPO_ROOT/tools/regen-output"
PACKAGE_NAME="@ccbluex/liquidbounce-script-api"

VERIFY=0
REGEN=1
for arg in "$@"; do
  case "$arg" in
    --verify) VERIFY=1 ;;
    --no-regen) REGEN=0 ;;
    -h|--help) sed -n '2,18p' "$0"; exit 0 ;;
    *) echo "Unknown arg: $arg" >&2; exit 2 ;;
  esac
done

if [[ "$REGEN" == "1" ]]; then
  # 1. Preflight.
  actual_sha="$(git -C "$LB_DIR" rev-parse HEAD)"
  if [[ "$actual_sha" != "$PINNED_SHA" ]]; then
    echo "references/liquidbounce is at $actual_sha; pinned is $PINNED_SHA" >&2
    echo "Run: (cd $LB_DIR && git checkout $PINNED_SHA)" >&2
    exit 1
  fi

  if ! command -v xvfb-run >/dev/null 2>&1 || ! command -v glxinfo >/dev/null 2>&1; then
    echo "FAIL: xvfb-run and glxinfo required." >&2
    echo "Install with: sudo apt install xvfb mesa-utils" >&2
    exit 1
  fi

  if [[ ! -x "$LB_DIR/gradlew" ]]; then
    echo "FAIL: $LB_DIR/gradlew is not executable" >&2
    exit 1
  fi

  # Java 25 — LB nextgen 0.38+ requires JVM 25 (buildSrc depends on Gradle
  # plugins built against Java 25). Earlier LB versions used 21.
  JAVA_HOME_25="/usr/lib/jvm/java-25-openjdk-amd64"
  if [[ ! -x "$JAVA_HOME_25/bin/java" ]]; then
    echo "FAIL: Java 25 required at $JAVA_HOME_25" >&2
    exit 1
  fi
  export JAVA_HOME="$JAVA_HOME_25"
  export PATH="$JAVA_HOME/bin:$PATH"

  # 2. Build / reuse our forked ts-generator shadow jar. Cache check via
  #    mtime — a touched source file invalidates the jar.
  TS_GEN_JAR="$TS_GEN_DIR/build/libs/ts-generator-1.1.4-all.jar"
  build_jar=0
  if [[ "${SKIP_JAR_BUILD:-0}" == "1" ]]; then
    echo "SKIP_JAR_BUILD=1 — using existing $TS_GEN_JAR" >&2
  elif [[ ! -f "$TS_GEN_JAR" ]]; then
    build_jar=1
  elif find "$TS_GEN_DIR/src" -type f -newer "$TS_GEN_JAR" -print -quit 2>/dev/null | grep -q .; then
    echo "ts-generator sources newer than jar; rebuilding…" >&2
    build_jar=1
  fi
  if [[ "$build_jar" == "1" ]]; then
    # ts-generator's Gradle 8.10 / Kotlin 2.0 can't read Java 25 class files
    # ("Unsupported class file major version 69") — build the shadow jar with
    # Java 21 even though we run LB with Java 25 below.
    JAVA_HOME_21="/usr/lib/jvm/java-21-openjdk-amd64"
    if [[ ! -x "$JAVA_HOME_21/bin/java" ]]; then
      echo "FAIL: Java 21 required at $JAVA_HOME_21 to build ts-generator" >&2
      exit 1
    fi
    (cd "$TS_GEN_DIR" && JAVA_HOME="$JAVA_HOME_21" PATH="$JAVA_HOME_21/bin:$PATH" ./gradlew --no-daemon shadowJar -q)
  fi
  if [[ ! -f "$TS_GEN_JAR" ]]; then
    echo "FAIL: $TS_GEN_JAR missing after build" >&2
    exit 1
  fi

  # 3. Stage the in-client scripts dir exactly as CCBlueX's workflow does.
  STAGE="$LB_DIR/run/LiquidBounce/scripts"
  MODS="$LB_DIR/run/mods"
  mkdir -p "$MODS" "$STAGE"

  # File copy (not symlink — gradle holds file locks during runClient and
  # symlinks across filesystems can race).
  cp -f "$TS_GEN_JAR" "$STAGE/ts-generator.jar"
  cp -f "$REPO_ROOT/tools/regen/ts-defgen.js" "$STAGE/ts-defgen.js"
  cp -f "$REPO_ROOT/tools/kdoc-extractor/manifest.json" "$STAGE/manifest.json"

  # 3b. Drop a Fabric-mod-wrapped copy of ts-generator.jar into run/mods/ so
  #     Knot loads its classes onto the runtime classpath. ts-defgen.js then
  #     resolves them via ReflectionUtil.classByName instead of
  #     `new URLClassLoader(...)` — the latter fails under Java 25 with
  #     `IllegalAccessException: Attempt to lookup caller-sensitive method
  #     using restricted lookup object` when called via GraalVM polyglot host
  #     interop (same regression upstream CCBlueX's CI hits on v0.38.0).
  MOD_JAR="$MODS/ts-generator-mod.jar"
  rm -f "$MOD_JAR"
  cp -f "$TS_GEN_JAR" "$MOD_JAR"
  FMJ_TMP="$(mktemp -d)"
  cat > "$FMJ_TMP/fabric.mod.json" <<'EOF'
{
  "schemaVersion": 1,
  "id": "ts_generator",
  "version": "1.1.4",
  "name": "TS Generator (typegen helper)",
  "description": "Wraps the commandblock2 ts-generator + ntrrgc tsGenerator classes as a runtime Fabric mod so LiquidBounce's script Knot classloader can resolve them for ts-defgen.js.",
  "environment": "*",
  "license": "Apache-2.0"
}
EOF
  (cd "$FMJ_TMP" && jar uf "$MOD_JAR" fabric.mod.json)
  rm -rf "$FMJ_TMP"

  # 4. Wipe any previous output to guarantee clean regen.
  rm -rf "$STAGE/@ccbluex"

  echo "Regenerating types via runClient (this takes 5–15 minutes)…" >&2
  echo "  ts-generator.jar: $(du -h "$STAGE/ts-generator.jar" | cut -f1)" >&2

  # 4b. Clear stale LWJGL native cache. After a host mesa/libgl upgrade
  #     the previously-extracted libglfw.so under /tmp/lwjgl_$USER can be
  #     ABI-incompatible with the new system libs; the symptom is
  #     Minecraft's Render thread silently hanging inside GLFW.glfwInit()
  #     at startup. Clearing forces LWJGL to re-extract from the jar.
  rm -rf "/tmp/lwjgl_${USER:-$(id -un)}"

  # 5. Run. CCBlueX's workflow uses `|| exit 0` because mc.close() at the
  #    end of ts-defgen.js may produce a nonzero gradle exit code; we
  #    mirror that tolerance, then explicitly verify the output below.
  set +e
  (
    cd "$LB_DIR" \
      && SCRIPT_TYPEGEN_BUILD=true \
         LB_BROWSER_SKIP=true \
         LB_INTEROP_SKIP=true \
         LIBGL_ALWAYS_SOFTWARE=1 \
         GALLIUM_DRIVER=llvmpipe \
         MESA_GL_VERSION_OVERRIDE=4.6 \
         JAVA_TOOL_OPTIONS="--add-opens=java.base/java.lang=ALL-UNNAMED --add-opens=java.base/java.lang.invoke=ALL-UNNAMED --add-opens=java.base/java.net=ALL-UNNAMED --add-opens=java.base/java.io=ALL-UNNAMED --add-opens=java.base/jdk.internal.loader=ALL-UNNAMED" \
         timeout "${REGEN_TIMEOUT:-60m}" xvfb-run --auto-servernum --server-args="-screen 0 1280x720x24 +extension GLX +render -noreset" \
         ./gradlew runClient -Dfabric.headless=true
  )
  rc=$?
  set -e
  echo "runClient exit code: $rc (treated as advisory; output verified next)" >&2

  # 6. Verify output exists and is non-trivial.
  pkg_src="$STAGE/$PACKAGE_NAME"
  if [[ ! -d "$pkg_src" ]]; then
    echo "FAIL: ts-defgen produced no output at $pkg_src" >&2
    exit 1
  fi
  file_count="$(find "$pkg_src" -type f | wc -l)"
  if (( file_count < 10000 )); then
    echo "FAIL: regen output has only $file_count files (expected >10000)" >&2
    exit 1
  fi

  # 7. Move into tools/regen-output/.
  rm -rf "$OUTPUT_DIR"
  mkdir -p "$OUTPUT_DIR"
  mv "$STAGE/@ccbluex" "$OUTPUT_DIR/@ccbluex"

  # 7b. Apply post-regen refinement patches (e.g. narrow registerScript's
  #     auto-detected `Map<String, Object>` parameter shape to the runtime
  #     contract `{ name; version; authors }` for autocomplete).
  bash "$REPO_ROOT/tools/regen/post-patches.sh" "$OUTPUT_DIR/$PACKAGE_NAME"

  # 8. Summary.
  pkg_dir="$OUTPUT_DIR/$PACKAGE_NAME"
  size="$(du -sh "$pkg_dir" | cut -f1)"
  echo "Regenerated: $pkg_dir" >&2
  echo "Files: $file_count   Size: $size" >&2
fi

if [[ "$VERIFY" == "1" ]]; then
  exec "$REPO_ROOT/tools/regen-types-check.sh" --no-regen
fi
