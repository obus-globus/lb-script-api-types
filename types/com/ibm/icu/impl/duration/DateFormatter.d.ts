import type { Date } from '../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DateFormatter extends Object{
    format(arg0: Date): string;
    format(arg0: number): string;
    withLocale(arg0: string): DateFormatter;
    withTimeZone(arg0: TimeZone): DateFormatter;
}