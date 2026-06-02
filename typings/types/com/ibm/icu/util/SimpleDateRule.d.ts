import type { Calendar } from '../../../../com/ibm/icu/util/Calendar.d.ts'
import type { DateRule } from '../../../../com/ibm/icu/util/DateRule.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SimpleDateRule extends Object implements DateRule {
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: Calendar)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean)
    // private calendar: Calendar;
    // private dayOfMonth: number;
    // private dayOfWeek: number;
    // private month: number;
    // private computeInYear(arg0: number, arg1: Calendar): Date;
    // private doFirstBetween(arg0: Date, arg1: Date): Date;
    firstAfter(arg0: Date): Date;
    firstBetween(arg0: Date, arg1: Date): Date;
    isBetween(arg0: Date, arg1: Date): boolean;
    isOn(arg0: Date): boolean;
}