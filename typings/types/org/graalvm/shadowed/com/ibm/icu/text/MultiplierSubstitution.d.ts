import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { NFRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRule.d.ts'
import type { NFRuleSet } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRuleSet.d.ts'
import type { NFSubstitution } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFSubstitution.d.ts'
import type { RuleBasedNumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
export class MultiplierSubstitution extends NFSubstitution {
    static makeSubstitution(parampos: number, paramrule: NFRule, paramrulePredecessor: NFRule, paramruleSet: NFRuleSet, paramformatter: RuleBasedNumberFormat, paramdescription: string): NFSubstitution;
    constructor(pos: number, rule: NFRule, ruleSet: NFRuleSet, description: string)
    divisor: number;
    // private owningRule: NFRule;
    calcUpperBound(oldUpperBound: number): number;
    composeRuleValue(newRuleValue: number, oldRuleValue: number): number;
    equals(that: Object | null): boolean;
    setDivisor(radix: number, exponent: number): void;
    tokenChar(): string;
    transformNumber(number: number): number;
}