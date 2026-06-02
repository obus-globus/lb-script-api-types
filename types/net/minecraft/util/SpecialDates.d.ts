import type { MonthDay } from '../../../java/time/MonthDay.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class SpecialDates extends Object {
    static CHRISTMAS: MonthDay;
    static CHRISTMAS_RANGE: MonthDay[];
    static HALLOWEEN: MonthDay;
    static NEW_YEAR: MonthDay;
    static dayNow(): MonthDay;
    static isExtendedChristmas(): boolean;
    static isHalloween(): boolean;
    constructor()
}