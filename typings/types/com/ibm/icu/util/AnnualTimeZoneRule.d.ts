import type { DateTimeRule } from '../../../../com/ibm/icu/util/DateTimeRule.d.ts'
import type { TimeZoneRule } from '../../../../com/ibm/icu/util/TimeZoneRule.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
export class AnnualTimeZoneRule extends TimeZoneRule {
    static MAX_YEAR: number;
    constructor(arg0: string, arg1: number, arg2: number, arg3: DateTimeRule, arg4: number, arg5: number)
    // private dateTimeRule: DateTimeRule;
    readonly endYear: number;
    readonly startYear: number;
    getEndYear(): number;
    getFinalStart(arg0: number, arg1: number): Date;
    getFirstStart(arg0: number, arg1: number): Date;
    getNextStart(arg0: number, arg1: number, arg2: number, arg3: boolean): Date;
    getPreviousStart(arg0: number, arg1: number, arg2: number, arg3: boolean): Date;
    getRule(): DateTimeRule;
    getStartInYear(arg0: number, arg1: number, arg2: number): Date;
    getStartYear(): number;
    isEquivalentTo(arg0: TimeZoneRule): boolean;
    isTransitionRule(): boolean;
    toString(): string;
}