import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { SoftReference } from '../../../../../../../java/lang/ref/SoftReference.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { CurrencyData$CurrencyDisplayInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { CurrencyData$CurrencyFormatInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencyFormatInfo.d.ts'
import type { CurrencyData$CurrencySpacingInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo.d.ts'
import type { ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$FormattingData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$FormattingData.d.ts'
import type { ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$ParsingData } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$ParsingData.d.ts'
import type { ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$VariantSymbol } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$VariantSymbol.d.ts'
import type { ICUResourceBundle } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { CurrencyDisplayNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyDisplayNames.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo extends CurrencyData$CurrencyDisplayInfo {
    static getInstance(paramlocale: Locale): CurrencyDisplayNames;
    static getInstance(paramlocale: Locale, paramnoSubstitute: boolean): CurrencyDisplayNames;
    static getInstance(paramlocale: ULocale): CurrencyDisplayNames;
    static getInstance(paramlocale: ULocale, paramnoSubstitute: boolean): CurrencyDisplayNames;
    static hasData(): boolean;
    constructor(locale: ULocale, rb: ICUResourceBundle, fallback: boolean)
    // private fallback: boolean;
    // private formattingDataCache: ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$FormattingData;
    // private locale: ULocale;
    // private parsingDataCache: SoftReference<ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$ParsingData>;
    // private pluralsDataCache: string[];
    // private rb: ICUResourceBundle;
    // private spacingInfoCache: CurrencyData$CurrencySpacingInfo;
    // private unitPatternsCache: JavaMap<string, string>;
    // private variantSymbolCache: ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$VariantSymbol;
    fetchFormattingData(isoCode: string): ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$FormattingData;
    fetchParsingData(): ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$ParsingData;
    fetchPluralsData(isoCode: string): string[];
    fetchSpacingInfo(): CurrencyData$CurrencySpacingInfo;
    fetchUnitPatterns(): JavaMap<string, string>;
    fetchVariantSymbol(isoCode: string, variant: string): ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$VariantSymbol;
    getFormalSymbol(isoCode: string): string;
    getFormatInfo(isoCode: string): CurrencyData$CurrencyFormatInfo;
    getName(isoCode: string): string;
    getNarrowSymbol(isoCode: string): string;
    getPluralName(isoCode: string, pluralKey: string): string;
    getSpacingInfo(): CurrencyData$CurrencySpacingInfo;
    getSymbol(isoCode: string): string;
    getULocale(): ULocale;
    getUnitPatterns(): JavaMap<string, string>;
    getVariantSymbol(isoCode: string): string;
    nameMap(): JavaMap<string, string>;
    symbolMap(): JavaMap<string, string>;
}