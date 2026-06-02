import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CurrencyData$CurrencyDisplayInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { CurrencyData$CurrencyDisplayInfoProvider } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfoProvider.d.ts'
import type { ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class ICUCurrencyDisplayInfoProvider extends Object implements CurrencyData$CurrencyDisplayInfoProvider {
    constructor()
    // private currencyDisplayInfoCache: ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo;
    getInstance(locale: ULocale, withFallback: boolean): CurrencyData$CurrencyDisplayInfo;
    hasData(): boolean;
}