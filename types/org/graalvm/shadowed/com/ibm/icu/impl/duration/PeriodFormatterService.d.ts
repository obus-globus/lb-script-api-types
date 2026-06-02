import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DurationFormatterFactory } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/DurationFormatterFactory.d.ts'
import type { PeriodBuilderFactory } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilderFactory.d.ts'
import type { PeriodFormatterFactory } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatterFactory.d.ts'
export interface PeriodFormatterService extends Object{
    getAvailableLocaleNames(): E[];
    newDurationFormatterFactory(): DurationFormatterFactory;
    newPeriodBuilderFactory(): PeriodBuilderFactory;
    newPeriodFormatterFactory(): PeriodFormatterFactory;
}