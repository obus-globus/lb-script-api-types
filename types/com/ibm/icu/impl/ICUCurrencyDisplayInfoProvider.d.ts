import type { CurrencyData$CurrencyDisplayInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { CurrencyData$CurrencyDisplayInfoProvider } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfoProvider.d.ts'
import type { ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo } from '../../../../com/ibm/icu/impl/ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ICUCurrencyDisplayInfoProvider extends Object implements CurrencyData$CurrencyDisplayInfoProvider {
    constructor()
    // private currencyDisplayInfoCache: ICUCurrencyDisplayInfoProvider$ICUCurrencyDisplayInfo;
    getInstance(arg0: ULocale, arg1: boolean): CurrencyData$CurrencyDisplayInfo;
    hasData(): boolean;
}