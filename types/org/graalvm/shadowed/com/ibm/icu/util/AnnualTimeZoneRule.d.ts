import type { Date } from '../../../../../../../java/util/Date.d.ts'
import type { DateTimeRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/DateTimeRule.d.ts'
import type { TimeZoneRule } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/TimeZoneRule.d.ts'
export class AnnualTimeZoneRule extends TimeZoneRule {
    static MAX_YEAR: number;
    constructor(name: string, rawOffset: number, dstSavings: number, dateTimeRule: DateTimeRule, startYear: number, endYear: number)
    // private dateTimeRule: DateTimeRule;
    readonly endYear: number;
    readonly startYear: number;
    getEndYear(): number;
    getFinalStart(prevRawOffset: number, prevDSTSavings: number): Date;
    getFirstStart(prevRawOffset: number, prevDSTSavings: number): Date;
    getNextStart(base: number, prevRawOffset: number, prevDSTSavings: number, inclusive: boolean): Date;
    getPreviousStart(base: number, prevRawOffset: number, prevDSTSavings: number, inclusive: boolean): Date;
    getRule(): DateTimeRule;
    getStartInYear(year: number, prevRawOffset: number, prevDSTSavings: number): Date;
    getStartYear(): number;
    isEquivalentTo(other: TimeZoneRule): boolean;
    isTransitionRule(): boolean;
    toString(): string;
}