import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../../java/lang/Comparable.d.ts'
import type { DateTimePatternGenerator$DistanceInfo } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$DistanceInfo.d.ts'
import type { DateTimePatternGenerator$FormatParser } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$FormatParser.d.ts'
import type { DateTimePatternGenerator$SkeletonFields } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/DateTimePatternGenerator$SkeletonFields.d.ts'
export class DateTimePatternGenerator$DateTimeMatcher extends Object implements Comparable<DateTimePatternGenerator$DateTimeMatcher> {
    private constructor()
    // private addedDefaultDayPeriod: boolean;
    // private baseOriginal: DateTimePatternGenerator$SkeletonFields;
    // private original: DateTimePatternGenerator$SkeletonFields;
    // private type: number[];
    compareTo(that: DateTimePatternGenerator$DateTimeMatcher): number;
    equals(other: Object | null): boolean;
    extractFrom(source: DateTimePatternGenerator$DateTimeMatcher, fieldMask: number): void;
    fieldIsNumeric(field: number): boolean;
    getBasePattern(): string;
    getDistance(other: DateTimePatternGenerator$DateTimeMatcher, includeMask: number, distanceInfo: DateTimePatternGenerator$DistanceInfo): number;
    getFieldMask(): number;
    hashCode(): number;
    set(pattern: string, fp: DateTimePatternGenerator$FormatParser, allowDuplicateFields: boolean): DateTimePatternGenerator$DateTimeMatcher;
    toCanonicalString(): string;
    toString(): string;
}