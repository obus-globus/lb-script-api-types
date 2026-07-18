import type { ContentRange } from '../../../io/ktor/http/ContentRange.d.ts'
import type { RangeUnits } from '../../../io/ktor/http/RangeUnits.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class RangesSpecifier extends Object {
    constructor(unit: RangeUnits, ranges: ContentRange[])
    constructor(unit: string, ranges: ContentRange[])
    readonly ranges: ContentRange[];
    readonly unit: string;
    component1(): string;
    component2(): ContentRange[];
    copy(unit: string, ranges: ContentRange[]): RangesSpecifier;
    equals(other: Object | null): boolean;
    hashCode(): number;
    isValid(rangeUnitPredicate: (param0: string) => boolean): boolean;
    merge(length: number): { start: number; endInclusive: number; step: number }[];
    merge(length: number, maxRangeCount?: number): { start: number; endInclusive: number; step: number }[];
    mergeToSingle(length: number): { start: number; endInclusive: number; step: number } | null;
    toString(): string;
}