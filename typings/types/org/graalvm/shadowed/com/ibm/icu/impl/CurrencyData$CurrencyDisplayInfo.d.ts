import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { CurrencyData$CurrencyFormatInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencyFormatInfo.d.ts'
import type { CurrencyData$CurrencySpacingInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencySpacingInfo.d.ts'
import type { CurrencyDisplayNames } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/CurrencyDisplayNames.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export abstract class CurrencyData$CurrencyDisplayInfo extends CurrencyDisplayNames {
    static getInstance(paramlocale: Locale): CurrencyDisplayNames;
    static getInstance(paramlocale: Locale, paramnoSubstitute: boolean): CurrencyDisplayNames;
    static getInstance(paramlocale: ULocale): CurrencyDisplayNames;
    static getInstance(paramlocale: ULocale, paramnoSubstitute: boolean): CurrencyDisplayNames;
    static hasData(): boolean;
    constructor()
    getFormatInfo(isoCode: string): CurrencyData$CurrencyFormatInfo;
    getSpacingInfo(): CurrencyData$CurrencySpacingInfo;
    getUnitPatterns(): { [key: string]: string };
}