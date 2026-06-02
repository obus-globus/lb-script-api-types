import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DateFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/DateFormatter.d.ts'
import type { DurationFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/DurationFormatter.d.ts'
import type { PeriodBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
export interface DurationFormatterFactory extends Object{
    getFormatter(): DurationFormatter;
    setFallback(fallback: DateFormatter): DurationFormatterFactory;
    setFallbackLimit(fallbackLimit: number): DurationFormatterFactory;
    setLocale(localeName: string): DurationFormatterFactory;
    setPeriodBuilder(builder: PeriodBuilder): DurationFormatterFactory;
    setPeriodFormatter(formatter: PeriodFormatter): DurationFormatterFactory;
    setTimeZone(timeZone: TimeZone): DurationFormatterFactory;
}