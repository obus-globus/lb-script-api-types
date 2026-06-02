import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DateRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/DateRule.d.ts'
export class Range extends Object {
    constructor(start: Date, rule: DateRule)
    rule: DateRule;
    start: Date;
}