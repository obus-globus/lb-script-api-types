import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Grego extends Object {
    static MAX_MILLIS: number;
    static MILLIS_PER_DAY: number;
    static MILLIS_PER_HOUR: number;
    static MILLIS_PER_MINUTE: number;
    static MILLIS_PER_SECOND: number;
    static MIN_MILLIS: number;
    static dayOfWeek(paramday: number): number;
    static dayToFields(paramday: number, paramfields: number[]): number[];
    static fieldsToDay(paramyear: number, parammonth: number, paramdom: number): number;
    static floorDivide(paramnumerator: number, paramdenominator: number): number;
    static getDayOfWeekInMonth(paramyear: number, parammonth: number, paramdayOfMonth: number): number;
    static isLeapYear(paramyear: number): boolean;
    static monthLength(paramyear: number, parammonth: number): number;
    static previousMonthLength(paramyear: number, parammonth: number): number;
    static timeToFields(paramtime: number, paramfields: number[]): number[];
    static timeToString(paramtime: number): string;
    constructor()
}