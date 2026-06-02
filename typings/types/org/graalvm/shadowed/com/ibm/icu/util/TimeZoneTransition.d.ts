import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TimeZoneRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZoneRule.d.ts'
export class TimeZoneTransition extends Object {
    constructor(time: number, from: TimeZoneRule, to: TimeZoneRule)
    readonly from: TimeZoneRule;
    readonly time: number;
    readonly to: TimeZoneRule;
    getFrom(): TimeZoneRule;
    getTime(): number;
    getTo(): TimeZoneRule;
    toString(): string;
}