import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { TimeZoneRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZoneRule.d.ts'
export class InitialTimeZoneRule extends TimeZoneRule {
    constructor(name: string, rawOffset: number, dstSavings: number)
    getFinalStart(prevRawOffset: number, prevDSTSavings: number): Date;
    getFirstStart(prevRawOffset: number, prevDSTSavings: number): Date;
    getNextStart(base: number, prevRawOffset: number, prevDSTSavings: number, inclusive: boolean): Date;
    getPreviousStart(base: number, prevRawOffset: number, prevDSTSavings: number, inclusive: boolean): Date;
    isEquivalentTo(other: TimeZoneRule): boolean;
    isTransitionRule(): boolean;
}