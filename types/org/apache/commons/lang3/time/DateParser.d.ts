import type { ParsePosition } from '../../../../../java/text/ParsePosition.d.ts'
import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DateParser extends Object{
    getLocale(): Locale;
    getPattern(): string;
    getTimeZone(): TimeZone;
    parse(arg0: string): Date;
    parse(arg0: string, arg1: ParsePosition): Date;
    parse(arg0: string, arg1: ParsePosition, arg2: Calendar): boolean;
    parseObject(arg0: string): Object;
    parseObject(arg0: string, arg1: ParsePosition): Object;
}