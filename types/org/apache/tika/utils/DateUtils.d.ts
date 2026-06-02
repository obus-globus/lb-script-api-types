import type { DateFormat } from '../../../../java/text/DateFormat.d.ts'
import type { Calendar } from '../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DateUtils extends Object {
    static MIDDAY: TimeZone;
    static UTC: TimeZone;
    static formatDate(paramarg0: Calendar): string;
    static formatDate(paramarg0: Date): string;
    static formatDateUnknownTimezone(paramarg0: Date): string;
    constructor()
    // private iso8601InputFormats: DateFormat[];
    // private loadDateFormats(): DateFormat[];
    tryToParse(arg0: string): Date;
}