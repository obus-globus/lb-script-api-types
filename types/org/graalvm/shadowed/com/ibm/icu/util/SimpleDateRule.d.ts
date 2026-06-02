import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Calendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Calendar.d.ts'
import type { DateRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/DateRule.d.ts'
export class SimpleDateRule extends Object implements DateRule {
    constructor(month: number, dayOfMonth: number)
    constructor(month: number, dayOfMonth: number, dayOfWeek: number, after: boolean)
    constructor(month: number, dayOfMonth: number, cal: Calendar)
    // private calendar: Calendar;
    // private dayOfMonth: number;
    // private dayOfWeek: number;
    // private month: number;
    // private computeInYear(year: number, c: Calendar): Date;
    // private doFirstBetween(start: Date, end: Date): Date;
    firstAfter(start: Date): Date;
    firstBetween(start: Date, end: Date): Date;
    isBetween(start: Date, end: Date): boolean;
    isOn(date: Date): boolean;
}