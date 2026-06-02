import type { Date } from '../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DurationFormatter extends Object{
    formatDurationFrom(arg0: number, arg1: number): string;
    formatDurationFromNow(arg0: number): string;
    formatDurationFromNowTo(arg0: Date): string;
    withLocale(arg0: string): DurationFormatter;
    withTimeZone(arg0: TimeZone): DurationFormatter;
}