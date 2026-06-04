import type { NFRule } from '../../../../com/ibm/icu/text/NFRule.d.ts'
import type { NFRuleSet } from '../../../../com/ibm/icu/text/NFRuleSet.d.ts'
import type { NFSubstitution } from '../../../../com/ibm/icu/text/NFSubstitution.d.ts'
import type { RuleBasedNumberFormat } from '../../../../com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MultiplierSubstitution extends NFSubstitution {
    static makeSubstitution(paramarg0: number, paramarg1: NFRule, paramarg2: NFRule, paramarg3: NFRuleSet, paramarg4: RuleBasedNumberFormat, paramarg5: string): NFSubstitution;
    constructor(arg0: number, arg1: NFRule, arg2: NFRuleSet, arg3: string)
    divisor: number;
    // private owningRule: NFRule;
    calcUpperBound(arg0: number): number;
    composeRuleValue(arg0: number, arg1: number): number;
    equals(arg0: Object | null): boolean;
    setDivisor(arg0: number, arg1: number): void;
    tokenChar(): string;
    transformNumber(arg0: number): number;
}