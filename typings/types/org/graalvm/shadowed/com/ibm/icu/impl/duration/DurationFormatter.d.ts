import type { Date } from '../../../../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface DurationFormatter extends Object{
    formatDurationFrom(duration: number, referenceDate: number): string;
    formatDurationFromNow(duration: number): string;
    formatDurationFromNowTo(targetDate: Date): string;
    withLocale(localeName: string): DurationFormatter;
    withTimeZone(tz: TimeZone): DurationFormatter;
}