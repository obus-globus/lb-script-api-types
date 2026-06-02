import type { TimeZoneRule } from '../../../../com/ibm/icu/util/TimeZoneRule.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
export class TimeArrayTimeZoneRule extends TimeZoneRule {
    constructor(arg0: string, arg1: number, arg2: number, arg3: number[], arg4: number)
    readonly startTimes: number[];
    readonly timeType: number;
    getFinalStart(arg0: number, arg1: number): Date;
    getFirstStart(arg0: number, arg1: number): Date;
    getNextStart(arg0: number, arg1: number, arg2: number, arg3: boolean): Date;
    getPreviousStart(arg0: number, arg1: number, arg2: number, arg3: boolean): Date;
    getStartTimes(): number[];
    getTimeType(): number;
    // private getUTC(arg0: number, arg1: number, arg2: number): number;
    isEquivalentTo(arg0: TimeZoneRule): boolean;
    isTransitionRule(): boolean;
    toString(): string;
}