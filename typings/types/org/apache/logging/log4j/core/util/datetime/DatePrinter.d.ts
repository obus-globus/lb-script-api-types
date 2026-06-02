import type { Appendable } from '../../../../../../../java/lang/Appendable.d.ts'
import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { FieldPosition } from '../../../../../../../java/text/FieldPosition.d.ts'
import type { Calendar } from '../../../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface DatePrinter extends Object{
    format(calendar: Calendar): string;
    format<B extends Appendable>(calendar: Calendar, buf: B): B;
    format(date: Date): string;
    format<B extends Appendable>(date: Date, buf: B): B;
    format(obj: Object, toAppendTo: StringBuilder, pos: FieldPosition): StringBuilder;
    format(millis: number): string;
    format<B extends Appendable>(millis: number, buf: B): B;
    getLocale(): Locale;
    getPattern(): string;
    getTimeZone(): TimeZone;
}