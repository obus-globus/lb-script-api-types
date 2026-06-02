import type { DecimalFormatSymbols } from '../../../../com/ibm/icu/text/DecimalFormatSymbols.d.ts'
import type { NFRuleSet } from '../../../../com/ibm/icu/text/NFRuleSet.d.ts'
import type { NFSubstitution } from '../../../../com/ibm/icu/text/NFSubstitution.d.ts'
import type { PluralFormat } from '../../../../com/ibm/icu/text/PluralFormat.d.ts'
import type { RuleBasedNumberFormat } from '../../../../com/ibm/icu/text/RuleBasedNumberFormat.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { ParsePosition } from '../../../../java/text/ParsePosition.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class NFRule extends Object {
    static makeRules(paramarg0: string, paramarg1: NFRuleSet, paramarg2: NFRule, paramarg3: RuleBasedNumberFormat, paramarg4: NFRule[]): void;
    constructor(arg0: RuleBasedNumberFormat, arg1: string)
    readonly baseValue: number;
    readonly decimalPoint: string;
    // private exponent: number;
    // private formatter: RuleBasedNumberFormat;
    // private radix: number;
    // private rulePatternFormat: PluralFormat;
    // private ruleText: string;
    // private sub1: NFSubstitution;
    // private sub2: NFSubstitution;
    // private allIgnorable(arg0: string): boolean;
    doFormat(arg0: number, arg1: StringBuilder, arg2: number, arg3: number): void;
    doFormat(arg0: number, arg1: StringBuilder, arg2: number, arg3: number): void;
    doParse(arg0: string, arg1: ParsePosition, arg2: boolean, arg3: number, arg4: number, arg5: number): Number;
    equals(arg0: Object | null): boolean;
    // private expectedExponent(): number;
    // private extractSubstitution(arg0: NFRuleSet, arg1: NFRule): NFSubstitution;
    // private extractSubstitutions(arg0: NFRuleSet, arg1: string, arg2: NFRule): void;
    // private findText(arg0: string, arg1: string, arg2: PluralFormat, arg3: number): number[];
    getBaseValue(): number;
    getDecimalPoint(): string;
    getDivisor(): number;
    hasModulusSubstitution(): boolean;
    hashCode(): number;
    // private matchToDelimiter(arg0: string, arg1: number, arg2: number, arg3: string, arg4: PluralFormat, arg5: ParsePosition, arg6: NFSubstitution, arg7: number, arg8: number, arg9: number): Number;
    // private parseRuleDescriptor(arg0: string): string;
    // private prefixLength(arg0: string, arg1: string): number;
    setBaseValue(arg0: number): void;
    setDecimalFormatSymbols(arg0: DecimalFormatSymbols): void;
    shouldRollBack(arg0: number): boolean;
    // private stripPrefix(arg0: string, arg1: string, arg2: ParsePosition): string;
    toString(): string;
}