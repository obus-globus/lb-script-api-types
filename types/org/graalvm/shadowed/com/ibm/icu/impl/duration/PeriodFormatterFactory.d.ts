import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { PeriodFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
export interface PeriodFormatterFactory extends Object{
    getFormatter(): PeriodFormatter;
    setCountVariant(variant: number): PeriodFormatterFactory;
    setDisplayLimit(display: boolean): PeriodFormatterFactory;
    setDisplayPastFuture(display: boolean): PeriodFormatterFactory;
    setLocale(localeName: string): PeriodFormatterFactory;
    setSeparatorVariant(variant: number): PeriodFormatterFactory;
    setUnitVariant(variant: number): PeriodFormatterFactory;
}