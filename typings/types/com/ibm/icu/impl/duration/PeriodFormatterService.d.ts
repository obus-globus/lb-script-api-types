import type { DurationFormatterFactory } from '../../../../../com/ibm/icu/impl/duration/DurationFormatterFactory.d.ts'
import type { PeriodBuilderFactory } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilderFactory.d.ts'
import type { PeriodFormatterFactory } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatterFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PeriodFormatterService extends Object{
    getAvailableLocaleNames(): E[];
    newDurationFormatterFactory(): DurationFormatterFactory;
    newPeriodBuilderFactory(): PeriodBuilderFactory;
    newPeriodFormatterFactory(): PeriodFormatterFactory;
}