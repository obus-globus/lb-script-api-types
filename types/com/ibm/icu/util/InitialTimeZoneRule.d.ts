import type { TimeZoneRule } from '../../../../com/ibm/icu/util/TimeZoneRule.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
export class InitialTimeZoneRule extends TimeZoneRule {
    constructor(arg0: string, arg1: number, arg2: number)
    getFinalStart(arg0: number, arg1: number): Date;
    getFirstStart(arg0: number, arg1: number): Date;
    getNextStart(arg0: number, arg1: number, arg2: number, arg3: boolean): Date;
    getPreviousStart(arg0: number, arg1: number, arg2: number, arg3: boolean): Date;
    isEquivalentTo(arg0: TimeZoneRule): boolean;
    isTransitionRule(): boolean;
}