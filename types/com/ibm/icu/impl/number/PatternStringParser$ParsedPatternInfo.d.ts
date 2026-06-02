import type { AffixPatternProvider } from '../../../../../com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { PatternStringParser$ParsedSubpatternInfo } from '../../../../../com/ibm/icu/impl/number/PatternStringParser$ParsedSubpatternInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PatternStringParser$ParsedPatternInfo extends Object implements AffixPatternProvider {
    static FLAG_NEG_PREFIX: number;
    static FLAG_NEG_SUFFIX: number;
    static FLAG_POS_PREFIX: number;
    static FLAG_POS_SUFFIX: number;
    static getLengthFromEndpoints(paramarg0: number): number;
    private constructor(arg0: string)
    negative: PatternStringParser$ParsedSubpatternInfo;
    pattern: string;
    positive: PatternStringParser$ParsedSubpatternInfo;
    charAt(arg0: number, arg1: number): string;
    containsSymbolType(arg0: number): boolean;
    currencyAsDecimal(): boolean;
    // private getEndpoints(arg0: number): number;
    getString(arg0: number): string;
    hasBody(): boolean;
    hasCurrencySign(): boolean;
    hasNegativeSubpattern(): boolean;
    length(arg0: number): number;
    negativeHasMinusSign(): boolean;
    positiveHasPlusSign(): boolean;
}