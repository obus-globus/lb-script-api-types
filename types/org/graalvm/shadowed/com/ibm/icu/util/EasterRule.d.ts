import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DateRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/DateRule.d.ts'
import type { GregorianCalendar } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/GregorianCalendar.d.ts'
export class EasterRule extends Object implements DateRule {
    constructor(daysAfterEaster: number, isOrthodox: boolean)
    // private calendar: GregorianCalendar;
    // private daysAfterEaster: number;
    // private computeInYear(date: Date, cal: GregorianCalendar): Date;
    // private doFirstBetween(start: Date, end: Date): Date;
    firstAfter(start: Date): Date;
    firstBetween(start: Date, end: Date): Date;
    isBetween(start: Date, end: Date): boolean;
    isOn(date: Date): boolean;
}