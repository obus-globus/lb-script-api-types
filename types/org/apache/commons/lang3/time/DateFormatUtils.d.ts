import type { Calendar } from '../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../java/util/Date.d.ts'
import type { Locale } from '../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FastDateFormat } from '../../../../../org/apache/commons/lang3/time/FastDateFormat.d.ts'
export class DateFormatUtils extends Object {
    static ISO_8601_EXTENDED_DATETIME_FORMAT: FastDateFormat;
    static ISO_8601_EXTENDED_DATETIME_TIME_ZONE_FORMAT: FastDateFormat;
    static ISO_8601_EXTENDED_DATE_FORMAT: FastDateFormat;
    static ISO_8601_EXTENDED_TIME_FORMAT: FastDateFormat;
    static ISO_8601_EXTENDED_TIME_TIME_ZONE_FORMAT: FastDateFormat;
    static ISO_DATETIME_FORMAT: FastDateFormat;
    static ISO_DATETIME_TIME_ZONE_FORMAT: FastDateFormat;
    static ISO_DATE_FORMAT: FastDateFormat;
    static ISO_DATE_TIME_ZONE_FORMAT: FastDateFormat;
    static ISO_TIME_FORMAT: FastDateFormat;
    static ISO_TIME_NO_T_FORMAT: FastDateFormat;
    static ISO_TIME_NO_T_TIME_ZONE_FORMAT: FastDateFormat;
    static ISO_TIME_TIME_ZONE_FORMAT: FastDateFormat;
    static SMTP_DATETIME_FORMAT: FastDateFormat;
    static format(paramarg0: Calendar, paramarg1: string): string;
    static format(paramarg0: Calendar, paramarg1: string, paramarg2: Locale): string;
    static format(paramarg0: Calendar, paramarg1: string, paramarg2: TimeZone): string;
    static format(paramarg0: Calendar, paramarg1: string, paramarg2: TimeZone, paramarg3: Locale): string;
    static format(paramarg0: Date, paramarg1: string): string;
    static format(paramarg0: Date, paramarg1: string, paramarg2: Locale): string;
    static format(paramarg0: Date, paramarg1: string, paramarg2: TimeZone): string;
    static format(paramarg0: Date, paramarg1: string, paramarg2: TimeZone, paramarg3: Locale): string;
    static format(paramarg0: number, paramarg1: string): string;
    static format(paramarg0: number, paramarg1: string, paramarg2: Locale): string;
    static format(paramarg0: number, paramarg1: string, paramarg2: TimeZone): string;
    static format(paramarg0: number, paramarg1: string, paramarg2: TimeZone, paramarg3: Locale): string;
    static formatUTC(paramarg0: Date, paramarg1: string): string;
    static formatUTC(paramarg0: Date, paramarg1: string, paramarg2: Locale): string;
    static formatUTC(paramarg0: number, paramarg1: string): string;
    static formatUTC(paramarg0: number, paramarg1: string, paramarg2: Locale): string;
    constructor()
}