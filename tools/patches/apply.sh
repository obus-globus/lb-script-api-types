#!/usr/bin/env bash
# Apply every patch in tools/patches/ to its matching reference checkout.
#
# Patches are plain unified diffs produced with `git diff` (a/ b/ prefixes)
# and named `NNNN-<description>.patch`. The first hunk's `diff --git` line
# is grepped for the reference directory name (first path segment under
# `references/`), and the patch is applied with `git apply -p1` from that
# working copy.
#
# Invoked from tools/update-refs.sh right after (re)clone so a drifted
# reference tree stays consistent with the tools that depend on it.
#
# A patch that fails to apply prints a loud warning but the script keeps
# going - the caller is expected to surface the failure in its own log.

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
PATCHES="$REPO_ROOT/tools/patches"
REFS="$REPO_ROOT/references"

shopt -s nullglob
failed=0
for patch in "$PATCHES"/*.patch; do
  # Patches declare their target reference directory with a leading
  # `# Target: <name>` comment (first line). Fall back to parsing the
  # diff header if absent, which is brittle but keeps older patches working.
  target_name="$(grep -m1 -E '^# Target:' "$patch" | sed -E 's/^# Target:[[:space:]]*//')"
  if [[ -z "$target_name" ]]; then
    first_path="$(grep -m1 -E '^(diff --git |\+\+\+ b/|--- a/)' "$patch" \
      | sed -E 's|^diff --git a/([^ ]+) b/.*|\1|; s|^\+\+\+ b/||; s|^--- a/||' \
      | head -1)"
    if [[ -z "$first_path" ]]; then
      echo "WARN: $patch has no recognisable path header - skipping" >&2
      failed=1; continue
    fi
    target_name="${first_path%%/*}"
    if [[ "$target_name" == "references" ]]; then
      target_name="${first_path#*/}"
      target_name="${target_name%%/*}"
    fi
  fi
  target="$REFS/$target_name"
  if [[ ! -d "$target" ]]; then
    echo "WARN: $patch targets $target_name which is not checked out - skipping" >&2
    failed=1; continue
  fi

  echo "== applying $(basename "$patch") -> $target_name =="
  # `git apply --check` first so we don't leave partial state on a conflict.
  if git -C "$target" apply --check --reverse "$patch" 2>/dev/null; then
    echo "   already applied"
    continue
  fi
  if ! git -C "$target" apply --check "$patch" 2>/dev/null; then
    echo "WARN: $patch no longer applies cleanly - upstream likely drifted. Needs re-authoring." >&2
    failed=1; continue
  fi
  git -C "$target" apply "$patch"
done

if [[ $failed -ne 0 ]]; then
  echo >&2
  echo "One or more reference patches failed - see docs/references-patches.md for recovery." >&2
  exit 1
fi
