import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DateFormatSymbols } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateFormatSymbols.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
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