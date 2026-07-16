import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Holiday } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Holiday.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class EasterHoliday extends Holiday {
    static ASCENSION: EasterHoliday;
    static ASH_WEDNESDAY: EasterHoliday;
    static CORPUS_CHRISTI: EasterHoliday;
    static EASTER_MONDAY: EasterHoliday;
    static EASTER_SUNDAY: EasterHoliday;
    static GOOD_FRIDAY: EasterHoliday;
    static MAUNDY_THURSDAY: EasterHoliday;
    static PALM_SUNDAY: EasterHoliday;
    static PENTECOST: EasterHoliday;
    static SHROVE_TUESDAY: EasterHoliday;
    static WHIT_MONDAY: EasterHoliday;
    static WHIT_SUNDAY: EasterHoliday;
    static getHolidays(): Holiday[];
    static getHolidays(paramlocale: Locale): Holiday[];
    static getHolidays(paramlocale: ULocale): Holiday[];
    constructor(daysAfter: number, orthodox: boolean, name: string)
    constructor(daysAfter: number, name: string)
    constructor(name: string)
}