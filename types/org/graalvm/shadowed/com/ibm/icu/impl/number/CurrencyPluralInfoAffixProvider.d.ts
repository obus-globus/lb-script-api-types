import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AffixPatternProvider } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { PropertiesAffixPatternProvider } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/PropertiesAffixPatternProvider.d.ts'
import type { CurrencyPluralInfo } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyPluralInfo.d.ts'
export class CurrencyPluralInfoAffixProvider extends Object implements AffixPatternProvider {
    static FLAG_NEG_PREFIX: number;
    static FLAG_NEG_SUFFIX: number;
    static FLAG_POS_PREFIX: number;
    static FLAG_POS_SUFFIX: number;
    constructor(cpi: CurrencyPluralInfo, properties: DecimalFormatProperties)
    // private affixesByPlural: PropertiesAffixPatternProvider[];
    charAt(flags: number, i: number): string;
    containsSymbolType(type: number): boolean;
    currencyAsDecimal(): boolean;
    getString(flags: number): string;
    hasBody(): boolean;
    hasCurrencySign(): boolean;
    hasNegativeSubpattern(): boolean;
    length(flags: number): number;
    negativeHasMinusSign(): boolean;
    positiveHasPlusSign(): boolean;
}