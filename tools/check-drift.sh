#!/usr/bin/env bash
# Drift check for the source-adapted HeadlessContext.kt.
#
# We copy just one function from upstream LiquidBounce's
# ScriptContextProvider.kt (see HeadlessContext.source.txt for the pinned SHA
# and file path). When upstream reorganises or adds new script bindings, this
# check tells us to re-port.
#
# The heuristic is intentionally coarse: we extract the set of `putMember`
# identifiers both from the upstream function body at the pinned SHA and from
# our local HeadlessContext.kt, then diff them. Anything missing on our side
# is surfaced as potential drift. Exits 0 on match (or graceful skip), 1 on
# drift, 2 on environment error.
set -euo pipefail

here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
repo="$(cd "$here/.." && pwd)"
lb="$repo/references/liquidbounce"
pin_file="$repo/tools/script-runner/HeadlessContext.source.txt"
local_file="$repo/tools/script-runner/src/main/kotlin/net/ccbluex/scriptrunner/HeadlessContext.kt"

if [[ ! -f "$pin_file" ]]; then
  echo "skip: no HeadlessContext.source.txt pin file" >&2
  exit 0
fi
if [[ ! -d "$lb/.git" ]]; then
  echo "skip: references/liquidbounce is not a git checkout" >&2
  exit 0
fi

sha="$(grep -oE '[0-9a-f]{40}' "$pin_file" | head -1 || true)"
if [[ -z "$sha" ]]; then
  echo "error: HeadlessContext.source.txt has no SHA" >&2
  exit 2
fi

upstream_path="src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptContextProvider.kt"

upstream=$(cd "$lb" && git show "$sha:$upstream_path" 2>/dev/null || true)
if [[ -z "$upstream" ]]; then
  echo "error: could not fetch $upstream_path at $sha from $lb" >&2
  exit 2
fi

# Extract putMember("IDENT", ...) identifiers from both files.
extract() {
  # shellcheck disable=SC2001
  echo "$1" | grep -oE 'putMember\("[A-Za-z_]+"' | sed 's/.*"\([A-Za-z_]*\)"/\1/' | sort -u
}
upstream_ids="$(extract "$upstream")"
local_ids="$(extract "$(cat "$local_file")")"

# Bindings we intentionally omit in the headless runner (Minecraft value
# types — scripts that need them get an L4-UNBOUND-MC-TYPES info diagnostic).
intentional_omissions=$(printf "Vec3i\nVec3d\nBlockPos\nHand\nRotationAxis\nMathHelper\nregisterScript\n")

missing="$(comm -23 <(echo "$upstream_ids") <(echo "$local_ids") | grep -vxF "$intentional_omissions" || true)"
extra="$(comm -13 <(echo "$upstream_ids") <(echo "$local_ids") || true)"

if [[ -z "$missing" && -z "$extra" ]]; then
  echo "ok: HeadlessContext bindings match upstream at $sha"
  header_ok=1
else
  header_ok=0
fi

# Also diff the Graal Context.Builder option set between our HeadlessScript
# (reimpl of PolyglotScript) and upstream PolyglotScript at the pinned SHA.
# Upstream changing its security posture (allowNativeAccess, allowIO, ...)
# is material — we want a heads-up.
upstream_ps_path="src/main/kotlin/net/ccbluex/liquidbounce/script/PolyglotScript.kt"
upstream_ps=$(cd "$lb" && git show "$sha:$upstream_ps_path" 2>/dev/null || true)
local_ps="$repo/tools/script-runner/src/main/kotlin/net/ccbluex/scriptrunner/HeadlessScript.kt"

extract_ctx_options() {
  echo "$1" \
    | grep -oE '\.(allowHostAccess|allowHostClassLookup|currentWorkingDirectory|allowIO|allowCreateProcess|allowCreateThread|allowNativeAccess|allowExperimentalOptions)\b' \
    | sort -u
}
extract_js_options() {
  echo "$1" \
    | grep -oE 'option\("(js\.[A-Za-z0-9_.-]+)"' \
    | sed -E 's/option\("([^"]+)".*/\1/' \
    | sort -u
}

ctx_up="$(extract_ctx_options "$upstream_ps")"
ctx_lo="$(extract_ctx_options "$(cat "$local_ps")")"
js_up="$(extract_js_options "$upstream_ps")"
js_lo="$(extract_js_options "$(cat "$local_ps")")"

ctx_missing="$(comm -23 <(echo "$ctx_up") <(echo "$ctx_lo") || true)"
ctx_extra="$(comm -13 <(echo "$ctx_up") <(echo "$ctx_lo") || true)"
js_missing="$(comm -23 <(echo "$js_up") <(echo "$js_lo") || true)"
js_extra="$(comm -13 <(echo "$js_up") <(echo "$js_lo") || true)"

builder_ok=1
if [[ -n "$ctx_missing" || -n "$ctx_extra" || -n "$js_missing" || -n "$js_extra" ]]; then
  builder_ok=0
  echo
  echo "drift detected between upstream PolyglotScript @ $sha Context.Builder config and HeadlessScript.kt:"
  if [[ -n "$ctx_missing" ]]; then
    echo "  Context options present upstream, missing in our reimpl:"
    echo "$ctx_missing" | sed 's/^/    - /'
  fi
  if [[ -n "$ctx_extra" ]]; then
    echo "  Context options in our reimpl not present upstream:"
    echo "$ctx_extra" | sed 's/^/    + /'
  fi
  if [[ -n "$js_missing" ]]; then
    echo "  JS engine options present upstream, missing in our reimpl:"
    echo "$js_missing" | sed 's/^/    - /'
  fi
  if [[ -n "$js_extra" ]]; then
    echo "  JS engine options in our reimpl not present upstream:"
    echo "$js_extra" | sed 's/^/    + /'
  fi
  echo
  echo "Update HeadlessScript.kt's buildContext() to mirror upstream's Context.Builder."
fi

if (( header_ok == 1 && builder_ok == 1 )); then
  echo "ok: HeadlessContext + HeadlessScript Context.Builder options both match upstream at $sha"
  exit 0
fi

if (( header_ok == 0 )); then
  echo "drift detected between upstream ScriptContextProvider @ $sha and HeadlessContext.kt:"
  if [[ -n "$missing" ]]; then
    echo "  missing locally (present upstream, not in our HeadlessContext):"
    echo "$missing" | sed 's/^/    - /'
  fi
  if [[ -n "$extra" ]]; then
    echo "  extra locally (in our HeadlessContext, not in upstream):"
    echo "$extra" | sed 's/^/    + /'
  fi
  echo
  echo "Re-port HeadlessContext.kt from upstream, then bump the SHA in"
  echo "  tools/script-runner/HeadlessContext.source.txt"
fi
exit 1
