import type { CurrencyData$CurrencyDisplayInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { CurrencyData$CurrencyFormatInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencyFormatInfo.d.ts'
import type { CurrencyData$CurrencySpacingInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo.d.ts'
import type { CurrencyDisplayNames } from '../../../../com/ibm/icu/text/CurrencyDisplayNames.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
export class CurrencyData$DefaultInfo extends CurrencyData$CurrencyDisplayInfo {
    static getInstance(paramarg0: ULocale): CurrencyDisplayNames;
    static getInstance(paramarg0: ULocale, paramarg1: boolean): CurrencyDisplayNames;
    static getInstance(paramarg0: Locale): CurrencyDisplayNames;
    static getInstance(paramarg0: Locale, paramarg1: boolean): CurrencyDisplayNames;
    static getWithFallback(paramarg0: boolean): CurrencyData$CurrencyDisplayInfo;
    static hasData(): boolean;
    private constructor(arg0: boolean)
    // private fallback: boolean;
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