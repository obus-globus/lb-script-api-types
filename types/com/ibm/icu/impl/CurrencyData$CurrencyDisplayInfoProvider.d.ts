import type { CurrencyData$CurrencyDisplayInfo } from '../../../../com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface CurrencyData$CurrencyDisplayInfoProvider extends Object{
    getInstance(arg0: ULocale, arg1: boolean): CurrencyData$CurrencyDisplayInfo;
    hasData(): boolean;
}