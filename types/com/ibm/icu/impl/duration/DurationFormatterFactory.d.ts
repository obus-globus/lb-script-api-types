import type { DateFormatter } from '../../../../../com/ibm/icu/impl/duration/DateFormatter.d.ts'
import type { DurationFormatter } from '../../../../../com/ibm/icu/impl/duration/DurationFormatter.d.ts'
import type { PeriodBuilder } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodFormatter } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DurationFormatterFactory extends Object{
    getFormatter(): DurationFormatter;
    setFallback(arg0: DateFormatter): DurationFormatterFactory;
    setFallbackLimit(arg0: number): DurationFormatterFactory;
    setLocale(arg0: string): DurationFormatterFactory;
    setPeriodBuilder(arg0: PeriodBuilder): DurationFormatterFactory;
    setPeriodFormatter(arg0: PeriodFormatter): DurationFormatterFactory;
    setTimeZone(arg0: TimeZone): DurationFormatterFactory;
}