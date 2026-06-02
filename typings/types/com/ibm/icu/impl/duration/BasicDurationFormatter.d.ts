import type { DateFormatter } from '../../../../../com/ibm/icu/impl/duration/DateFormatter.d.ts'
import type { DurationFormatter } from '../../../../../com/ibm/icu/impl/duration/DurationFormatter.d.ts'
import type { Period } from '../../../../../com/ibm/icu/impl/duration/Period.d.ts'
import type { PeriodBuilder } from '../../../../../com/ibm/icu/impl/duration/PeriodBuilder.d.ts'
import type { PeriodFormatter } from '../../../../../com/ibm/icu/impl/duration/PeriodFormatter.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BasicDurationFormatter extends Object implements DurationFormatter {
    constructor(arg0: PeriodFormatter, arg1: PeriodBuilder, arg2: DateFormatter, arg3: number)
    constructor(arg0: PeriodFormatter, arg1: PeriodBuilder, arg2: DateFormatter, arg3: number, arg4: string, arg5: TimeZone)
    // private builder: PeriodBuilder;
    // private fallback: DateFormatter;
    // private fallbackLimit: number;
    // private formatter: PeriodFormatter;
    // private localeName: string;
    // private timeZone: TimeZone;
    doBuild(arg0: number, arg1: number): Period;
    doFallback(arg0: number, arg1: number): string;
    doFormat(arg0: Period): string;
    formatDurationFrom(arg0: number, arg1: number): string;
    formatDurationFromNow(arg0: number): string;
    formatDurationFromNowTo(arg0: Date): string;
    withLocale(arg0: string): DurationFormatter;
    withTimeZone(arg0: TimeZone): DurationFormatter;
}