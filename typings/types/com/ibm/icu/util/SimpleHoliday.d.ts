import type { Holiday } from '../../../../com/ibm/icu/util/Holiday.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Locale } from '../../../../java/util/Locale.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    static getHolidays(paramarg0: ULocale): (Object | null)[];
    static getHolidays(paramarg0: Locale): (Object | null)[];
    constructor(arg0: number, arg1: number, arg2: number, arg3: string)
    constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: string, arg4: number, arg5: number)
    constructor(arg0: number, arg1: number, arg2: string)
    constructor(arg0: number, arg1: number, arg2: string, arg3: number)
    constructor(arg0: number, arg1: number, arg2: string, arg3: number, arg4: number)
}