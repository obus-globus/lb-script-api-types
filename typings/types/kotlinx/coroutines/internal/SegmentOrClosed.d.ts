import type { Object } from '../../../java/lang/Object.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
export class SegmentOrClosed<S extends Segment<S>> extends Object {
// (invalid TS: name contains '-')     static box-impl(paramarg0: Object): SegmentOrClosed<Object>;
// (invalid TS: name contains '-')     static constructor-impl(paramarg0: Object): Object;
// (invalid TS: name contains '-')     static equals-impl(paramarg0: Object, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static equals-impl0(paramarg0: Object, paramarg1: Object): boolean;
// (invalid TS: name contains '-')     static getSegment-impl(paramarg0: Object): Object | null;
// (invalid TS: name contains '-')     static hashCode-impl(paramarg0: Object): number;
// (invalid TS: name contains '-')     static isClosed-impl(paramarg0: Object): boolean;
// (invalid TS: name contains '-')     static toString-impl(paramarg0: Object): string;
    constructor(value: Object | null)
// (invalid TS: name contains '-')     /*not mapped: */ isClosed-impl(): boolean;
// (invalid TS: name contains '-')     /*not mapped: */ getSegment-impl(): S;
    // private value: Object | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}