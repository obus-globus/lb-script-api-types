import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holiday } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Holiday.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class HebrewHoliday extends Holiday {
    static ESTHER: HebrewHoliday;
    static GEDALIAH: HebrewHoliday;
    static HANUKKAH: HebrewHoliday;
    static HOSHANAH_RABBAH: HebrewHoliday;
    static LAG_BOMER: HebrewHoliday;
    static PASSOVER: HebrewHoliday;
    static PESACH_SHEINI: HebrewHoliday;
    static PURIM: HebrewHoliday;
    static ROSH_HASHANAH: HebrewHoliday;
    static SELIHOT: HebrewHoliday;
    static SHAVUOT: HebrewHoliday;
    static SHEMINI_ATZERET: HebrewHoliday;
    static SHUSHAN_PURIM: HebrewHoliday;
    static SIMCHAT_TORAH: HebrewHoliday;
    static SUKKOT: HebrewHoliday;
    static TAMMUZ_17: HebrewHoliday;
    static TEVET_10: HebrewHoliday;
    static TISHA_BAV: HebrewHoliday;
    static TU_BSHEVAT: HebrewHoliday;
    static YOM_HAATZMAUT: HebrewHoliday;
    static YOM_HASHOAH: HebrewHoliday;
    static YOM_HAZIKARON: HebrewHoliday;
    static YOM_KIPPUR: HebrewHoliday;
    static YOM_YERUSHALAYIM: HebrewHoliday;
    static getHolidays(): (Object | null)[];
    static getHolidays(paramlocale: Locale): (Object | null)[];
    static getHolidays(paramlocale: ULocale): (Object | null)[];
    constructor(month: number, date: number, length: number, name: string)
    constructor(month: number, date: number, name: string)
}