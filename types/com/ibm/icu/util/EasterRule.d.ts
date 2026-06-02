import type { DateRule } from '../../../../com/ibm/icu/util/DateRule.d.ts'
import type { GregorianCalendar } from '../../../../com/ibm/icu/util/GregorianCalendar.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EasterRule extends Object implements DateRule {
    constructor(arg0: number, arg1: boolean)
    // private calendar: GregorianCalendar;
    // private daysAfterEaster: number;
    // private computeInYear(arg0: Date, arg1: GregorianCalendar): Date;
    // private doFirstBetween(arg0: Date, arg1: Date): Date;
    firstAfter(arg0: Date): Date;
    firstBetween(arg0: Date, arg1: Date): Date;
    isBetween(arg0: Date, arg1: Date): boolean;
    isOn(arg0: Date): boolean;
}