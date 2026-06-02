import type { TimeZoneRule } from '../../../../com/ibm/icu/util/TimeZoneRule.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TimeZoneTransition extends Object {
    constructor(arg0: number, arg1: TimeZoneRule, arg2: TimeZoneRule)
    readonly from: TimeZoneRule;
    readonly time: number;
    readonly to: TimeZoneRule;
    getFrom(): TimeZoneRule;
    getTime(): number;
    getTo(): TimeZoneRule;
    toString(): string;
}