import type { Calendar } from '../../../../../../java/util/Calendar.d.ts'
import type { Date } from '../../../../../../java/util/Date.d.ts'
import type { TimeZone } from '../../../../../../java/util/TimeZone.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { CronExpression$ValueSet } from '../../../../../../org/apache/logging/log4j/core/util/CronExpression$ValueSet.d.ts'
export class CronExpression extends Object {
    static MAX_YEAR: number;
    static MIN_CAL: Calendar;
    static MIN_DATE: Date;
    static isValidExpression(paramcronExpression: string): boolean;
    static validateExpression(paramcronExpression: string): void;
    constructor(cronExpression: string)
    readonly cronExpression: string;
    // private daysOfMonth: number[];
    // private daysOfWeek: number[];
    // private expressionParsed: boolean;
    // private hours: number[];
    // private lastdayOfMonth: boolean;
    // private lastdayOfWeek: boolean;
    // private lastdayOffset: number;
    // private minutes: number[];
    // private months: number[];
    // private nearestWeekday: boolean;
    // private nthdayOfWeek: number;
    // private seconds: number[];
    readonly timeZone: TimeZone;
    // private years: number[];
    addToSet(val: number, end: number, incr: number, type: number): void;
    buildExpression(expression: string): void;
    checkNext(pos: number, s: string, val: number, type: number): number;
    // private findMinIncrement(): number;
    findNextWhiteSpace(i: number, s: string): number;
    getCronExpression(): string;
    getDayOfWeekNumber(s: string): number;
    getExpressionSetSummary(list: number[]): string;
    getExpressionSetSummary(set: number[]): string;
    getExpressionSummary(): string;
    getFinalFireTime(): Date;
    getLastDayOfMonth(monthNum: number, year: number): number;
    getMonthNumber(s: string): number;
    getNextInvalidTimeAfter(date: Date): Date;
    getNextValidTimeAfter(date: Date): Date;
    getNumericValue(s: string, i: number): number;
    getPrevFireTime(targetDate: Date): Date;
    getSet(type: number): number[];
    getTimeAfter(afterTime: Date): Date;
    getTimeBefore(targetDate: Date): Date;
    getTimeZone(): TimeZone;
    getValue(v: number, s: string, i: number): CronExpression$ValueSet;
    isLeapYear(year: number): boolean;
    isSatisfiedBy(date: Date): boolean;
    // private minInSet(set: number[]): number;
    setCalendarHour(cal: Calendar, hour: number): void;
    setTimeZone(timeZone: TimeZone): void;
    skipWhiteSpace(i: number, s: string): number;
    storeExpressionVals(pos: number, s: string, type: number): number;
    toString(): string;
}