#!/usr/bin/env bash
# Dry-run of the check-regen.yml "Decide auto-release vs review" step.
#
# The Decide step is the fail-closed routing brain of the auto-release pipeline:
# a clean regen (all gates pass + MC unchanged + real changes, on an enabled
# repo) auto-releases; ANYTHING else routes to the human review branch. This
# harness extracts the REAL step script from the workflow YAML (so it can't drift
# from what actually runs), substitutes the ${{ }} step-output tokens and stubs
# git/node per case, runs it, and asserts auto/changed + the derived route across
# the full matrix. Nothing real is touched — no git writes, no regen, no publish.
#
# Usage: tools/regen/test-decide-routing.sh   (needs bash + ruby)
set -uo pipefail
REPO="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
YAML="$REPO/.github/workflows/check-regen.yml"

# Pull the exact Decide run-script text from the YAML (faithful, no hand-copy).
DECIDE="$(ruby -ryaml -e '
  d=YAML.load_file(ARGV[0]); s=d["jobs"]["check-regen"]["steps"].find{|x| x["id"]=="decide"}; print s["run"]' "$YAML")"

fail=0
run_case() {
  local name="$1" AUTO_RELEASE="$2" gate="$3" canary="$4" sanity="$5" gentest="$6" \
        new_mc="$7" old_mc="$8" changed_in="$9" exp_auto="${10}" exp_changed="${11}" exp_route="${12}"

  local script="$DECIDE"
  # Substitute the GitHub template tokens with this case's mocked outputs.
  script="${script//'${{ vars.AUTO_RELEASE }}'/$AUTO_RELEASE}"
  script="${script//'${{ steps.gate.outputs.gate }}'/$gate}"
  script="${script//'${{ steps.canary.outputs.canary }}'/$canary}"
  script="${script//'${{ steps.sanity.outputs.sanity }}'/$sanity}"
  script="${script//'${{ steps.gentest.outputs.gentest }}'/$gentest}"

  local out summ; out="$(mktemp)"; summ="$(mktemp)"
  # Mocks: git status controls `changed`; git show + node feed OLD/NEW MC.
  MOCK_CHANGED="$changed_in" MOCK_NEW_MC="$new_mc" MOCK_OLD_MC="$old_mc" \
  GITHUB_OUTPUT="$out" GITHUB_STEP_SUMMARY="$summ" \
  bash -c '
    git() {
      case "$1" in
        status) [ "$MOCK_CHANGED" = "true" ] && echo " M typings/types/x.d.ts" || true ;;
        show)   echo "{\"liquidbounce\":{\"minecraft\":\"$MOCK_OLD_MC\"}}" ;;
        *) command git "$@" ;;
      esac
    }
    node() {
      local expr="$*"
      if [[ "$expr" == *"readFileSync(0)"* ]]; then echo "$MOCK_OLD_MC"; else echo "$MOCK_NEW_MC"; fi
    }
    export -f git node
    '"$script"'
  '

  local auto changed
  auto="$(sed -n 's/^auto=//p' "$out" | tail -n1)"
  changed="$(sed -n 's/^changed=//p' "$out" | tail -n1)"
  [ -z "$auto" ] && auto="(unset)"
  [ -z "$changed" ] && changed="(unset)"

  # Derive the route from the 6a/6b step `if:` conditions (exists=false here):
  #   auto==true -> auto-release ; else changed==true -> review ; else skip
  local route
  if [ "$auto" = "true" ]; then route="auto-release"
  elif [ "$changed" = "true" ]; then route="review"
  else route="skip"; fi

  local status="OK"
  if [ "$auto" != "$exp_auto" ] || [ "$changed" != "$exp_changed" ] || [ "$route" != "$exp_route" ]; then
    status="MISMATCH"; fail=1
  fi
  printf '%-22s auto=%-7s changed=%-7s route=%-13s expect[%s/%s/%s] %s\n' \
    "$name" "$auto" "$changed" "$route" "$exp_auto" "$exp_changed" "$exp_route" "$status"
  rm -f "$out" "$summ"
}

printf 'case                   result                                             expected            status\n'
#         name                AUTO gate canary sanity gentest NEW  OLD  CHG   eA    eC    eRoute
run_case "1 all-pass"         true pass pass pass pass 1.21 1.21 true  true  true  auto-release
run_case "2 typecheck-fail"   true fail pass pass pass 1.21 1.21 true  false true  review
run_case "3 canary-fail"      true pass fail pass pass 1.21 1.21 true  false true  review
run_case "4 sanity-fail"      true pass pass fail pass 1.21 1.21 true  false true  review
run_case "5 gentest-fail"     true pass pass pass fail 1.21 1.21 true  false true  review
run_case "6 mc-bump"          true pass pass pass pass 1.22 1.21 true  false true  review
run_case "7 no-changes"       true pass pass pass pass 1.21 1.21 false false false skip
# Bonus: AUTO_RELEASE disabled even with everything green -> review (not auto).
run_case "8 auto-disabled"    false pass pass pass pass 1.21 1.21 true false true  review

echo
if [ "$fail" = 0 ]; then echo "ALL CASES PASS — fail-closed routing verified."; else echo "FAILURES PRESENT."; fi
exit $fail
