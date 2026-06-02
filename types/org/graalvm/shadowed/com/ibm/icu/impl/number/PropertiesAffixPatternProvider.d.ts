import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { AffixPatternProvider } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/AffixPatternProvider.d.ts'
import type { DecimalFormatProperties } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/number/DecimalFormatProperties.d.ts'
export class PropertiesAffixPatternProvider extends Object implements AffixPatternProvider {
    static FLAG_NEG_PREFIX: number;
    static FLAG_NEG_SUFFIX: number;
    static FLAG_POS_PREFIX: number;
    static FLAG_POS_SUFFIX: number;
    static forProperties(paramproperties: DecimalFormatProperties): AffixPatternProvider;
    constructor(properties: DecimalFormatProperties)
    // private currencyAsDecimal: boolean;
    // private isCurrencyPattern: boolean;
    // private negPrefix: string;
    // private negSuffix: string;
    // private posPrefix: string;
    // private posSuffix: string;
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
    toString(): string;
}