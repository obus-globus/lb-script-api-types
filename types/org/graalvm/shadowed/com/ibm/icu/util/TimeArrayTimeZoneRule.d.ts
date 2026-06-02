import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { TimeZoneRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZoneRule.d.ts'
export class TimeArrayTimeZoneRule extends TimeZoneRule {
    constructor(name: string, rawOffset: number, dstSavings: number, startTimes: number[], timeType: number)
    readonly startTimes: number[];
    readonly timeType: number;
    getFinalStart(prevRawOffset: number, prevDSTSavings: number): Date;
    getFirstStart(prevRawOffset: number, prevDSTSavings: number): Date;
    getNextStart(base: number, prevOffset: number, prevDSTSavings: number, inclusive: boolean): Date;
    getPreviousStart(base: number, prevOffset: number, prevDSTSavings: number, inclusive: boolean): Date;
    getStartTimes(): number[];
    getTimeType(): number;
    // private getUTC(time: number, raw: number, dst: number): number;
    isEquivalentTo(other: TimeZoneRule): boolean;
    isTransitionRule(): boolean;
    toString(): string;
}