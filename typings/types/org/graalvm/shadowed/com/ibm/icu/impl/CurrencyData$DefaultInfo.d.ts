import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { CurrencyData$CurrencyDisplayInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { CurrencyData$CurrencyFormatInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencyFormatInfo.d.ts'
import type { CurrencyData$CurrencySpacingInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo.d.ts'
import type { CurrencyDisplayNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyDisplayNames.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class CurrencyData$DefaultInfo extends CurrencyData$CurrencyDisplayInfo {
    static getInstance(paramlocale: Locale): CurrencyDisplayNames;
    static getInstance(paramlocale: Locale, paramnoSubstitute: boolean): CurrencyDisplayNames;
    static getInstance(paramlocale: ULocale): CurrencyDisplayNames;
    static getInstance(paramlocale: ULocale, paramnoSubstitute: boolean): CurrencyDisplayNames;
    static getWithFallback(paramfallback: boolean): CurrencyData$CurrencyDisplayInfo;
    static hasData(): boolean;
    private constructor(fallback: boolean)
    // private fallback: boolean;
    getFormalSymbol(isoCode: string): string;
    getFormatInfo(isoCode: string): CurrencyData$CurrencyFormatInfo;
    getName(isoCode: string): string;
    getNarrowSymbol(isoCode: string): string;
    getPluralName(isoCode: string, pluralType: string): string;
    getSpacingInfo(): CurrencyData$CurrencySpacingInfo;
    getSymbol(isoCode: string): string;
    getULocale(): ULocale;
    getUnitPatterns(): JavaMap<string, string>;
    getVariantSymbol(isoCode: string): string;
    nameMap(): JavaMap<string, string>;
    symbolMap(): JavaMap<string, string>;
}