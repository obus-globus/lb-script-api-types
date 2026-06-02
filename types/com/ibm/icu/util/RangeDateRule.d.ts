import type { DateRule } from '../../../../com/ibm/icu/util/DateRule.d.ts'
import type { Range } from '../../../../com/ibm/icu/util/Range.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RangeDateRule extends Object implements DateRule {
    constructor()
    // private ranges: Range[];
    add(arg0: DateRule): void;
    add(arg0: Date, arg1: DateRule): void;
    firstAfter(arg0: Date): Date;
    firstBetween(arg0: Date, arg1: Date): Date;
    isBetween(arg0: Date, arg1: Date): boolean;
    isOn(arg0: Date): boolean;
    // private rangeAt(arg0: number): Range;
    // private startIndex(arg0: Date): number;
}