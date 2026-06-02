import type { NFRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRule.d.ts'
import type { NFRuleSet } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRuleSet.d.ts'
import type { NFSubstitution } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFSubstitution.d.ts'
import type { RuleBasedNumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
export class AbsoluteValueSubstitution extends NFSubstitution {
    static makeSubstitution(parampos: number, paramrule: NFRule, paramrulePredecessor: NFRule, paramruleSet: NFRuleSet, paramformatter: RuleBasedNumberFormat, paramdescription: string): NFSubstitution;
    constructor(pos: number, ruleSet: NFRuleSet, description: string)
    calcUpperBound(oldUpperBound: number): number;
    composeRuleValue(newRuleValue: number, oldRuleValue: number): number;
    tokenChar(): string;
    transformNumber(number: number): number;
    transformNumber(number: number): number;
}