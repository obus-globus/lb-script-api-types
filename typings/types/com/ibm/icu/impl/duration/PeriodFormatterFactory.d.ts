import type { PeriodFormatter } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PeriodFormatterFactory extends Object{
    getFormatter(): PeriodFormatter;
    setCountVariant(arg0: number): PeriodFormatterFactory;
    setDisplayLimit(arg0: boolean): PeriodFormatterFactory;
    setDisplayPastFuture(arg0: boolean): PeriodFormatterFactory;
    setLocale(arg0: string): PeriodFormatterFactory;
    setSeparatorVariant(arg0: number): PeriodFormatterFactory;
    setUnitVariant(arg0: number): PeriodFormatterFactory;
}