import type { DateRule } from '../../../../com/ibm/icu/util/DateRule.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Range extends Object {
    constructor(arg0: Date, arg1: DateRule)
    rule: DateRule;
    start: Date;
}