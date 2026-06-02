import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { TimeZone } from '../../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FastDatePrinter$TimeZoneDisplayKey extends Object {
    constructor(timeZone: TimeZone, daylight: boolean, style: number, locale: Locale)
    // private mLocale: Locale;
    // private mStyle: number;
    // private mTimeZone: TimeZone;
    equals(obj: Object | null): boolean;
    hashCode(): number;
}