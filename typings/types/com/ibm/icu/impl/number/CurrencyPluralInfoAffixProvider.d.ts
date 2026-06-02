import type { AffixPatternProvider } from '../../../../../com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { DecimalFormatProperties } from '../../../../../com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
import type { PropertiesAffixPatternProvider } from '../../../../../com/ibm/icu/impl/number/PropertiesAffixPatternProvider.d.ts'
import type { CurrencyPluralInfo } from '../../../../../com/ibm/icu/text/CurrencyPluralInfo.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CurrencyPluralInfoAffixProvider extends Object implements AffixPatternProvider {
    static FLAG_NEG_PREFIX: number;
    static FLAG_NEG_SUFFIX: number;
    static FLAG_POS_PREFIX: number;
    static FLAG_POS_SUFFIX: number;
    constructor(arg0: CurrencyPluralInfo, arg1: DecimalFormatProperties)
    // private affixesByPlural: PropertiesAffixPatternProvider[];
    charAt(arg0: number, arg1: number): string;
    containsSymbolType(arg0: number): boolean;
    currencyAsDecimal(): boolean;
    getString(arg0: number): string;
    hasBody(): boolean;
    hasCurrencySign(): boolean;
    hasNegativeSubpattern(): boolean;
    length(arg0: number): number;
    negativeHasMinusSign(): boolean;
    positiveHasPlusSign(): boolean;
}