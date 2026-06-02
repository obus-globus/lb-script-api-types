import type { Appendable } from '../../../../../java/lang/Appendable.d.ts'
import type { StringBuffer } from '../../../../../java/lang/StringBuffer.d.ts'
import type { FieldPosition } from '../../../../../java/text/FieldPosition.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DatePrinter extends Object{
    format(arg0: Calendar): string;
    format<B extends Appendable>(arg0: Calendar, arg1: B): B;
    format(arg0: Calendar, arg1: StringBuffer): StringBuffer;
    format(arg0: Date): string;
    format<B extends Appendable>(arg0: Date, arg1: B): B;
    format(arg0: Date, arg1: StringBuffer): StringBuffer;
    format(arg0: Object, arg1: StringBuffer, arg2: FieldPosition): StringBuffer;
    format(arg0: number): string;
    format<B extends Appendable>(arg0: number, arg1: B): B;
    format(arg0: number, arg1: StringBuffer): StringBuffer;
    getLocale(): Locale;
    getPattern(): string;
    getTimeZone(): TimeZone;
}