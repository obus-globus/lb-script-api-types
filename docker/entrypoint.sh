#!/usr/bin/env bash
#
# Container entrypoint: ensure the repo is present at /work (clone on first run,
# update on later runs so the /work volume caches the checkout + LB source +
# regen-output across runs), then run the whole flow. Extra args pass through to
# run-regen.sh (e.g. --no-promote).
set -euo pipefail

# The repo is bind-mounted from a CI checkout owned by a different uid than the
# container's root; git refuses to operate on it ("detected dubious ownership")
# unless it's marked safe. Allow any path (container is ephemeral, single repo).
git config --global --add safe.directory '*'

WORK=/work
REPO_URL="${REPO_URL:-https://github.com/obus-globus/lb-script-api-types.git}"
REPO_REF="${REPO_REF:-main}"

if [[ ! -e "$WORK/run-regen.sh" ]]; then
  echo "==> No repo at $WORK - cloning $REPO_URL@$REPO_REF"
  # /work may be a non-empty volume mountpoint; clone into a temp then move in.
  tmp="$(mktemp -d)"
  git clone --branch "$REPO_REF" --recurse-submodules "$REPO_URL" "$tmp/repo"
  shopt -s dotglob
  mv "$tmp/repo"/* "$WORK"/
  rm -rf "$tmp"
else
  echo "==> Reusing repo at $WORK (git pull)"
  git -C "$WORK" pull --ff-only || echo "   (pull skipped - detached/dirty)"
fi

cd "$WORK"
git submodule update --init --recursive generator || true

# Install the repo's npm devDeps (typescript) once if absent. run-regen.sh's
# post-promote drift gates + the in-container typecheck/package-canary need
# `tsc`; a from-scratch container has no node_modules. No-op on hosts/volumes
# that already have it (e.g. local runs, a reused /work volume).
if [[ ! -d "$WORK/node_modules/typescript" ]]; then
  echo "==> installing npm devDeps (typescript) for the drift gates"
  npm ci --no-audit --no-fund || npm install --no-audit --no-fund \
    || echo "   WARN: npm install failed - post-promote gates may not run"
fi

exec ./run-regen.sh "$@"
