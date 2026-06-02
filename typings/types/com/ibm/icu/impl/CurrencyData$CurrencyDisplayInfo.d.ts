import type { CurrencyData$CurrencyFormatInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencyFormatInfo.d.ts'
import type { CurrencyData$CurrencySpacingInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo.d.ts'
import type { CurrencyDisplayNames } from '../../../../com/ibm/icu/text/CurrencyDisplayNames.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
export abstract class CurrencyData$CurrencyDisplayInfo extends CurrencyDisplayNames {
    static getInstance(paramarg0: ULocale): CurrencyDisplayNames;
    static getInstance(paramarg0: ULocale, paramarg1: boolean): CurrencyDisplayNames;
    static getInstance(paramarg0: Locale): CurrencyDisplayNames;
    static getInstance(paramarg0: Locale, paramarg1: boolean): CurrencyDisplayNames;
    static hasData(): boolean;
    constructor()
    getFormatInfo(arg0: string): CurrencyData$CurrencyFormatInfo;
    getSpacingInfo(): CurrencyData$CurrencySpacingInfo;
    getUnitPatterns(): { [key: string]: string };
}