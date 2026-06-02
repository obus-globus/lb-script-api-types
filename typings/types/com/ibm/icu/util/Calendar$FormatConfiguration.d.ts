import type { DateFormatSymbols } from '../../../../com/ibm/icu/text/DateFormatSymbols.d.ts'
import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Calendar$FormatConfiguration extends Object {
    private constructor()
    // private cal: Calendar;
    // private formatData: DateFormatSymbols;
    // private loc: ULocale;
    // private override: string;
    // private pattern: string;
    getCalendar(): Calendar;
    getDateFormatSymbols(): DateFormatSymbols;
    getLocale(): ULocale;
    getOverrideString(): string;
    getPatternString(): string;
}