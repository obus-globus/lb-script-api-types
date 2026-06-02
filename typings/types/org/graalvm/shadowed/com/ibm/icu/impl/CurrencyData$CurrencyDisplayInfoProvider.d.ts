import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CurrencyData$CurrencyDisplayInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/CurrencyData$CurrencyDisplayInfo.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export interface CurrencyData$CurrencyDisplayInfoProvider extends Object{
    getInstance(locale: ULocale, withFallback: boolean): CurrencyData$CurrencyDisplayInfo;
    hasData(): boolean;
}