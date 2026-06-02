import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DateRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/DateRule.d.ts'
import type { Range } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/Range.d.ts'
export class RangeDateRule extends Object implements DateRule {
    constructor()
    // private ranges: Range[];
    add(start: Date, rule: DateRule): void;
    add(rule: DateRule): void;
    firstAfter(start: Date): Date;
    firstBetween(start: Date, end: Date): Date;
    isBetween(start: Date, end: Date): boolean;
    isOn(date: Date): boolean;
    // private rangeAt(index: number): Range;
    // private startIndex(start: Date): number;
}