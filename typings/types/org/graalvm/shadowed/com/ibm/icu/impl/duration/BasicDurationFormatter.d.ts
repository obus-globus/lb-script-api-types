import type { Date } from '../../../../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DateFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/DateFormatter.d.ts'
import type { DurationFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/DurationFormatter.d.ts'
import type { Period } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/Period.d.ts'
import type { PeriodBuilder } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodFormatter } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
export class BasicDurationFormatter extends Object implements DurationFormatter {
    constructor(formatter: PeriodFormatter, builder: PeriodBuilder, fallback: DateFormatter, fallbackLimit: number)
    constructor(formatter: PeriodFormatter, builder: PeriodBuilder, fallback: DateFormatter, fallbackLimit: number, localeName: string, timeZone: TimeZone)
    // private builder: PeriodBuilder;
    // private fallback: DateFormatter;
    // private fallbackLimit: number;
    // private formatter: PeriodFormatter;
    // private localeName: string;
    // private timeZone: TimeZone;
    doBuild(duration: number, referenceDate: number): Period;
    doFallback(duration: number, referenceDate: number): string;
    doFormat(period: Period): string;
    formatDurationFrom(duration: number, referenceDate: number): string;
    formatDurationFromNow(duration: number): string;
    formatDurationFromNowTo(targetDate: Date): string;
    withLocale(locName: string): DurationFormatter;
    withTimeZone(tz: TimeZone): DurationFormatter;
}