import type { Pair } from '../../../../com/ibm/icu/impl/Pair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Grego extends Object {
    static MAX_MILLIS: number;
    static MILLIS_PER_DAY: number;
    static MILLIS_PER_HOUR: number;
    static MILLIS_PER_MINUTE: number;
    static MILLIS_PER_SECOND: number;
    static MIN_MILLIS: number;
    static dayOfWeek(paramarg0: number): number;
    static dayToFields(paramarg0: number, paramarg1: number[]): number[];
    static dayToYear(paramarg0: number): Pair<number, number>;
    static fieldsToDay(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static floorDivide(paramarg0: number, paramarg1: number): number;
    static getDayOfWeekInMonth(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static isLeapYear(paramarg0: number): boolean;
    static monthLength(paramarg0: number, paramarg1: number): number;
    static previousMonthLength(paramarg0: number, paramarg1: number): number;
    static timeToFields(paramarg0: number, paramarg1: number[]): number[];
    static timeToString(paramarg0: number): string;
    static timeToYear(paramarg0: number): number;
    constructor()
}