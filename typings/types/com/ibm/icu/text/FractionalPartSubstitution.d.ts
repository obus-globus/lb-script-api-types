import type { NFRule } from '../../../../com/ibm/icu/text/NFRule.d.ts'
import type { NFRuleSet } from '../../../../com/ibm/icu/text/NFRuleSet.d.ts'
import type { NFSubstitution } from '../../../../com/ibm/icu/text/NFSubstitution.d.ts'
import type { RuleBasedNumberFormat } from '../../../../com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class FractionalPartSubstitution extends NFSubstitution {
    static makeSubstitution(paramarg0: number, paramarg1: NFRule, paramarg2: NFRule, paramarg3: NFRuleSet, paramarg4: RuleBasedNumberFormat, paramarg5: string): NFSubstitution;
    constructor(arg0: number, arg1: NFRuleSet, arg2: string)
    // private byDigits: boolean;
    // private useSpaces: boolean;
    calcUpperBound(arg0: number): number;
    composeRuleValue(arg0: number, arg1: number): number;
    doParse(arg0: string, arg1: ParsePosition, arg2: number, arg3: number, arg4: boolean, arg5: number, arg6: number): Number;
    doSubstitution(arg0: number, arg1: StringBuilder, arg2: number, arg3: number): void;
    tokenChar(): string;
    transformNumber(arg0: number): number;
    transformNumber(arg0: number): number;
}