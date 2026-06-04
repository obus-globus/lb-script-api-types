import type { NFRule } from '../../../../com/ibm/icu/text/NFRule.d.ts'
import type { NFRuleSet } from '../../../../com/ibm/icu/text/NFRuleSet.d.ts'
import type { NFSubstitution } from '../../../../com/ibm/icu/text/NFSubstitution.d.ts'
import type { RuleBasedNumberFormat } from '../../../../com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
export class IntegralPartSubstitution extends NFSubstitution {
    static makeSubstitution(paramarg0: number, paramarg1: NFRule, paramarg2: NFRule, paramarg3: NFRuleSet, paramarg4: RuleBasedNumberFormat, paramarg5: string): NFSubstitution;
    constructor(arg0: number, arg1: NFRuleSet, arg2: string)
    calcUpperBound(arg0: number): number;
    composeRuleValue(arg0: number, arg1: number): number;
    tokenChar(): string;
    transformNumber(arg0: number): number;
}