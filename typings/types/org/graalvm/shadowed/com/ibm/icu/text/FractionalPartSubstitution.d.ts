import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { NFRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRule.d.ts'
import type { NFRuleSet } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRuleSet.d.ts'
import type { NFSubstitution } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFSubstitution.d.ts'
import type { RuleBasedNumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
export class FractionalPartSubstitution extends NFSubstitution {
    static makeSubstitution(parampos: number, paramrule: NFRule, paramrulePredecessor: NFRule, paramruleSet: NFRuleSet, paramformatter: RuleBasedNumberFormat, paramdescription: string): NFSubstitution;
    constructor(pos: number, ruleSet: NFRuleSet, description: string)
    // private byDigits: boolean;
    // private useSpaces: boolean;
    calcUpperBound(oldUpperBound: number): number;
    composeRuleValue(newRuleValue: number, oldRuleValue: number): number;
    doParse(text: string, parsePosition: ParsePosition, baseValue: number, upperBound: number, lenientParse: boolean, nonNumericalExecutedRuleMask: number, recursionCount: number): Number;
    doSubstitution(number: number, toInsertInto: StringBuilder, position: number, recursionCount: number): void;
    doSubstitution(number: number, toInsertInto: StringBuilder, position: number, recursionCount: number): void;
    tokenChar(): string;
    transformNumber(number: number): number;
    transformNumber(number: number): number;
}