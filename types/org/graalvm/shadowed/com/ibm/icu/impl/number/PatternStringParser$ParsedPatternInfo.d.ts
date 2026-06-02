import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AffixPatternProvider } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { PatternStringParser$ParsedSubpatternInfo } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/PatternStringParser$ParsedSubpatternInfo.d.ts'
export class PatternStringParser$ParsedPatternInfo extends Object implements AffixPatternProvider {
    static FLAG_NEG_PREFIX: number;
    static FLAG_NEG_SUFFIX: number;
    static FLAG_POS_PREFIX: number;
    static FLAG_POS_SUFFIX: number;
    static getLengthFromEndpoints(paramendpoints: number): number;
    private constructor(pattern: string)
    negative: PatternStringParser$ParsedSubpatternInfo;
    pattern: string;
    positive: PatternStringParser$ParsedSubpatternInfo;
    charAt(flags: number, index: number): string;
    containsSymbolType(type: number): boolean;
    currencyAsDecimal(): boolean;
    // private getEndpoints(flags: number): number;
    getString(flags: number): string;
    hasBody(): boolean;
    hasCurrencySign(): boolean;
    hasNegativeSubpattern(): boolean;
    length(flags: number): number;
    negativeHasMinusSign(): boolean;
    positiveHasPlusSign(): boolean;
}