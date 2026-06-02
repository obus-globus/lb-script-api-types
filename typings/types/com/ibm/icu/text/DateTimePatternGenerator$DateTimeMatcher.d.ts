import type { DateTimePatternGenerator$DistanceInfo } from '../../../../com/ibm/icu/text/DateTimePatternGenerator$DistanceInfo.d.ts'
import type { DateTimePatternGenerator$FormatParser } from '../../../../com/ibm/icu/text/DateTimePatternGenerator$FormatParser.d.ts'
import type { DateTimePatternGenerator$SkeletonFields } from '../../../../com/ibm/icu/text/DateTimePatternGenerator$SkeletonFields.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class DateTimePatternGenerator$DateTimeMatcher extends Object implements Comparable<DateTimePatternGenerator$DateTimeMatcher> {
    private constructor()
    // private addedDefaultDayPeriod: boolean;
    // private baseOriginal: DateTimePatternGenerator$SkeletonFields;
    // private original: DateTimePatternGenerator$SkeletonFields;
    // private type: number[];
    compareTo(arg0: DateTimePatternGenerator$DateTimeMatcher): number;
    equals(arg0: Object | null): boolean;
    extractFrom(arg0: DateTimePatternGenerator$DateTimeMatcher, arg1: number): void;
    fieldIsNumeric(arg0: number): boolean;
    getBasePattern(): string;
    getDistance(arg0: DateTimePatternGenerator$DateTimeMatcher, arg1: number, arg2: DateTimePatternGenerator$DistanceInfo): number;
    getFieldMask(): number;
    hashCode(): number;
    set(arg0: string, arg1: DateTimePatternGenerator$FormatParser, arg2: boolean): DateTimePatternGenerator$DateTimeMatcher;
    toCanonicalString(): string;
    toString(): string;
}