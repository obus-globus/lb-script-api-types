import type { Date } from '../../../../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export interface DateFormatter extends Object{
    format(date: Date): string;
    format(date: number): string;
    withLocale(localeName: string): DateFormatter;
    withTimeZone(tz: TimeZone): DateFormatter;
}