import type { Locale } from '../../../../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holiday } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Holiday.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class SimpleHoliday extends Holiday {
    static ALL_SAINTS_DAY: SimpleHoliday;
    static ALL_SOULS_DAY: SimpleHoliday;
    static ASSUMPTION: SimpleHoliday;
    static BOXING_DAY: SimpleHoliday;
    static CHRISTMAS: SimpleHoliday;
    static CHRISTMAS_EVE: SimpleHoliday;
    static EPIPHANY: SimpleHoliday;
    static IMMACULATE_CONCEPTION: SimpleHoliday;
    static MAY_DAY: SimpleHoliday;
    static NEW_YEARS_DAY: SimpleHoliday;
    static NEW_YEARS_EVE: SimpleHoliday;
    static ST_STEPHENS_DAY: SimpleHoliday;
    static getHolidays(): (Object | null)[];
    static getHolidays(paramlocale: Locale): (Object | null)[];
    static getHolidays(paramlocale: ULocale): (Object | null)[];
    constructor(month: number, dayOfMonth: number, dayOfWeek: number, name: string)
    constructor(month: number, dayOfMonth: number, dayOfWeek: number, name: string, startYear: number)
    constructor(month: number, dayOfMonth: number, dayOfWeek: number, name: string, startYear: number, endYear: number)
    constructor(month: number, dayOfMonth: number, name: string)
    constructor(month: number, dayOfMonth: number, name: string, startYear: number)
    constructor(month: number, dayOfMonth: number, name: string, startYear: number, endYear: number)
}