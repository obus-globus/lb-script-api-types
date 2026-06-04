import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { DecimalFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormat.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { NFRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRule.d.ts'
import type { NFRuleSet } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRuleSet.d.ts'
import type { RuleBasedNumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
export abstract class NFSubstitution extends Object {
    static makeSubstitution(parampos: number, paramrule: NFRule, paramrulePredecessor: NFRule, paramruleSet: NFRuleSet, paramformatter: RuleBasedNumberFormat, paramdescription: string): NFSubstitution;
    constructor(pos: number, ruleSet: NFRuleSet, description: string)
    // private numberFormat: DecimalFormat;
    readonly pos: number;
    // private ruleSet: NFRuleSet;
    calcUpperBound(oldUpperBound: number): number;
    composeRuleValue(newRuleValue: number, oldRuleValue: number): number;
    doParse(text: string, parsePosition: ParsePosition, baseValue: number, upperBound: number, lenientParse: boolean, nonNumericalExecutedRuleMask: number, recursionCount: number): Number;
    doSubstitution(number: number, toInsertInto: StringBuilder, position: number, recursionCount: number): void;
    equals(that: Object | null): boolean;
    getPos(): number;
    hashCode(): number;
    isModulusSubstitution(): boolean;
    setDecimalFormatSymbols(newSymbols: DecimalFormatSymbols): void;
    setDivisor(radix: number, exponent: number): void;
    toString(): string;
    tokenChar(): string;
    transformNumber(number: number): number;
}