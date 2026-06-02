import type { Holiday } from '../../../../com/ibm/icu/util/Holiday.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    static getHolidays(): (Object | null)[];
    static getHolidays(paramarg0: ULocale): (Object | null)[];
    static getHolidays(paramarg0: Locale): (Object | null)[];
    constructor(arg0: number, arg1: boolean, arg2: string)
    constructor(arg0: number, arg1: string)
    constructor(arg0: string)
}