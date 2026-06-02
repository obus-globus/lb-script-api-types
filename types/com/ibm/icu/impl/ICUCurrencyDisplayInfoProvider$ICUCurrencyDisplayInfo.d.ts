import type { CurrencyData$CurrencyDisplayInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { CurrencyData$CurrencyFormatInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencyFormatInfo.d.ts'
import type { CurrencyData$CurrencySpacingInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo.d.ts'
import type { ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$FormattingData } from '../../../../com/ibm/icu/impl/ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$FormattingData.d.ts'
import type { ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$ParsingData } from '../../../../com/ibm/icu/impl/ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$ParsingData.d.ts'
import type { ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$VariantSymbol } from '../../../../com/ibm/icu/impl/ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$VariantSymbol.d.ts'
import type { ICUResourceBundle } from '../../../../com/ibm/icu/impl/ICUResourceBundle.d.ts'
import type { CurrencyDisplayNames } from '../../../../com/ibm/icu/text/CurrencyDisplayNames.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { SoftReference } from '../../../../java/lang/ref/SoftReference.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
export class ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo extends CurrencyData$CurrencyDisplayInfo {
    static getInstance(paramarg0: ULocale): CurrencyDisplayNames;
    static getInstance(paramarg0: ULocale, paramarg1: boolean): CurrencyDisplayNames;
    static getInstance(paramarg0: Locale): CurrencyDisplayNames;
    static getInstance(paramarg0: Locale, paramarg1: boolean): CurrencyDisplayNames;
    static hasData(): boolean;
    constructor(arg0: ULocale, arg1: ICUResourceBundle, arg2: boolean)
    // private fallback: boolean;
    // private formattingDataCache: ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$FormattingData;
    // private locale: ULocale;
    // private parsingDataCache: SoftReference<ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$ParsingData>;
    // private pluralsDataCache: string[];
    // private rb: ICUResourceBundle;
    // private spacingInfoCache: CurrencyData$CurrencySpacingInfo;
    // private unitPatternsCache: { [key: string]: string };
    // private variantSymbolCache: ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$VariantSymbol;
    fetchFormattingData(arg0: string): ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$FormattingData;
    fetchParsingData(): ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$ParsingData;
    fetchPluralsData(arg0: string): string[];
    fetchSpacingInfo(): CurrencyData$CurrencySpacingInfo;
    fetchUnitPatterns(): { [key: string]: string };
    fetchVariantSymbol(arg0: string, arg1: string): ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo$VariantSymbol;
    getFormalSymbol(arg0: string): string;
    getFormatInfo(arg0: string): CurrencyData$CurrencyFormatInfo;
    getName(arg0: string): string;
    getNarrowSymbol(arg0: string): string;
    getPluralName(arg0: string, arg1: string): string;
    getSpacingInfo(): CurrencyData$CurrencySpacingInfo;
    getSymbol(arg0: string): string;
    getULocale(): ULocale;
    getUnitPatterns(): { [key: string]: string };
    getVariantSymbol(arg0: string): string;
    nameMap(): { [key: string]: string };
    symbolMap(): { [key: string]: string };
}