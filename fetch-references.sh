#!/usr/bin/env bash
#
# Fetch the heavy, gitignored inputs the regen pipeline needs but that this repo
# does NOT commit:
#
#   references/liquidbounce  — the LiquidBounce source at the pinned SHA (the
#                              binding/event source the generator reflects over).
#
# Additional inputs the pipeline expects (set up separately — too large/host-
# specific to fetch here):
#   - tools/script-runner/   — a headless JDK 25 + Xvfb + MC harness that launches
#                              the client so LB's ts-defgen.js can run inside it.
#   - decompiled Minecraft   — via tools/decompile-minecraft.sh.
#
# After running this (and the generator submodule is initialised), the regen
# entry point is tools/regen-types.sh.
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Keep in sync with PINNED_SHA in tools/regen-types.sh — the LB commit the
# currently-shipped types/ were generated against.
PINNED_SHA="$(grep -oE 'PINNED_SHA="[0-9a-f]+"' "$REPO_ROOT/tools/regen-types.sh" | head -1 | sed -E 's/.*"([0-9a-f]+)".*/\1/')"
PINNED_SHA="${PINNED_SHA:-fac52d9c85c85141cb327e00599cdf8e0a7afc66}"

LB_DIR="$REPO_ROOT/references/liquidbounce"
mkdir -p "$REPO_ROOT/references"

if [[ ! -d "$LB_DIR/.git" ]]; then
  echo "Cloning LiquidBounce into references/liquidbounce …"
  git clone --recurse-submodules https://github.com/CCBlueX/LiquidBounce.git "$LB_DIR"
fi
echo "Checking out LiquidBounce @ $PINNED_SHA …"
git -C "$LB_DIR" fetch --all --tags
git -C "$LB_DIR" checkout --recurse-submodules "$PINNED_SHA"
echo "Done. references/liquidbounce is at $PINNED_SHA."

# Initialise the generator submodule if needed.
if [[ ! -e "$REPO_ROOT/generator/build.gradle" ]]; then
  echo "Initialising the generator submodule …"
  git -C "$REPO_ROOT" submodule update --init generator
fi
