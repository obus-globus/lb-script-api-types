import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { ParsePosition } from '../../../../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { DecimalFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { NFRuleSet } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFRuleSet.d.ts'
import type { NFSubstitution } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NFSubstitution.d.ts'
import type { PluralFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/PluralFormat.d.ts'
import type { RuleBasedNumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
export class NFRule extends Object {
    static makeRules(paramdescription: string, paramowner: NFRuleSet, parampredecessor: NFRule, paramownersOwner: RuleBasedNumberFormat, paramreturnList: NFRule[]): void;
    constructor(formatter: RuleBasedNumberFormat, ruleText: string)
    readonly baseValue: number;
    readonly decimalPoint: string;
    // private exponent: number;
    // private formatter: RuleBasedNumberFormat;
    // private radix: number;
    // private rulePatternFormat: PluralFormat;
    // private ruleText: string;
    // private sub1: NFSubstitution;
    // private sub2: NFSubstitution;
    // private allIgnorable(str: string): boolean;
    doFormat(number: number, toInsertInto: StringBuilder, pos: number, recursionCount: number): void;
    doFormat(number: number, toInsertInto: StringBuilder, pos: number, recursionCount: number): void;
    doParse(text: string, parsePosition: ParsePosition, isFractionRule: boolean, upperBound: number, nonNumericalExecutedRuleMask: number, recursionCount: number): Number;
    equals(that: Object | null): boolean;
    // private expectedExponent(): number;
    // private extractSubstitution(owner: NFRuleSet, predecessor: NFRule): NFSubstitution;
    // private extractSubstitutions(owner: NFRuleSet, ruleText: string, predecessor: NFRule): void;
    // private findText(str: string, key: string, pluralFormatKey: PluralFormat, startingAt: number): number[];
    getBaseValue(): number;
    getDecimalPoint(): string;
    getDivisor(): number;
    hasModulusSubstitution(): boolean;
    hashCode(): number;
    // private matchToDelimiter(text: string, startPos: number, baseVal: number, delimiter: string, pluralFormatDelimiter: PluralFormat, pp: ParsePosition, sub: NFSubstitution, upperBound: number, nonNumericalExecutedRuleMask: number, recursionCount: number): Number;
    // private parseRuleDescriptor(description: string): string;
    // private prefixLength(str: string, prefix: string): number;
    setBaseValue(newBaseValue: number): void;
    setDecimalFormatSymbols(newSymbols: DecimalFormatSymbols): void;
    shouldRollBack(number: number): boolean;
    // private stripPrefix(text: string, prefix: string, pp: ParsePosition): string;
    toString(): string;
}