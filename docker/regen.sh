#!/usr/bin/env bash
#
# Build the regen image and run the whole type-generation flow inside it, with
# persistent named volumes so re-runs skip the multi-GB Gradle/Minecraft/LB
# downloads (only the ~50-60 min softpipe introspection remains).
#
#   docker/regen.sh [run-regen args]      # e.g. --no-promote
#
# Volumes:
#   lb-types-work    -> /work        (cloned repo + LB source + regen-output)
#   lb-types-gradle  -> /cache/gradle (Gradle deps + Loom's Minecraft cache)
#
# Extract the result afterwards, e.g.:
#   docker run --rm -v lb-types-work:/work -v "$PWD/out":/out \
#     alpine sh -c 'cp -r /work/typings /out/'
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
IMAGE="${IMAGE:-lb-script-api-types-regen:local}"

echo "==> building image $IMAGE"
docker build -f "$ROOT/docker/Dockerfile" -t "$IMAGE" "$ROOT"

echo "==> running the regen flow"
exec docker run --rm \
  --shm-size=1g \
  -e REPO_REF="${REPO_REF:-main}" \
  -v lb-types-work:/work \
  -v lb-types-gradle:/cache/gradle \
  "$IMAGE" "$@"
