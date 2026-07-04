#!/usr/bin/env bash
# Re-pull or freshly clone all upstream reference repos.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
REFS="$REPO_ROOT/references"
mkdir -p "$REFS"

clone_or_update() {
  local url="$1" dir="$2" branch="${3:-}"
  local target="$REFS/$dir"
  if [[ -d "$target/.git" ]]; then
    echo "== updating $dir =="
    git -C "$target" fetch --depth 1 origin ${branch:+"$branch"}
    git -C "$target" reset --hard "origin/${branch:-$(git -C "$target" symbolic-ref --short HEAD)}"
  else
    echo "== cloning $dir =="
    if [[ -n "$branch" ]]; then
      git clone --depth 1 --branch "$branch" "$url" "$target"
    else
      git clone --depth 1 "$url" "$target"
    fi
  fi
}

clone_or_update https://github.com/ccbluex/liquidbounce.git liquidbounce nextgen
clone_or_update https://github.com/CCBlueX/Documentation.git Documentation
clone_or_update https://github.com/CCBlueX/ScriptAPI.git ScriptAPI
clone_or_update https://github.com/CCBlueX/ts-generator.git ts-generator

echo
echo "References updated at $REFS"
du -sh "$REFS"/*/

echo
echo "== Applying reference patches (tools/patches/) =="
"$REPO_ROOT/tools/patches/apply.sh" || {
  echo "WARN: some reference patches failed - dependent tooling may not work until they are refreshed." >&2
}

echo
echo "== Decompiling Minecraft sources (via LB's fabric-loom genSources) =="
"$REPO_ROOT/tools/decompile-minecraft.sh" || {
  echo "WARN: Minecraft source decompilation failed - MC source grep/qa-agent will be unavailable." >&2
}

echo
echo "== Regenerating Java.type allowlist (docs/refs/java-types.txt) =="
"$REPO_ROOT/tools/generate-java-types.sh" || true
