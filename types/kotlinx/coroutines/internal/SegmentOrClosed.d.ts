import type { Object } from '../../../java/lang/Object.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
export class SegmentOrClosed<S extends Segment<S>> extends Object {
//     static box-impl(paramarg0: Object): SegmentOrClosed<Object>;
 // ; invalid because of -//     static constructor-impl(paramarg0: Object): Object;
 // ; invalid because of -//     static equals-impl(paramarg0: Object, paramarg1: Object): boolean;
 // ; invalid because of -//     static equals-impl0(paramarg0: Object, paramarg1: Object): boolean;
 // ; invalid because of -//     static getSegment-impl(paramarg0: Object): Object | null;
 // ; invalid because of -//     static hashCode-impl(paramarg0: Object): number;
 // ; invalid because of -//     static isClosed-impl(paramarg0: Object): boolean;
 // ; invalid because of -//     static toString-impl(paramarg0: Object): string;
 // ; invalid because of -    constructor(value: Object | null)
//     /*not mapped: */ isClosed-impl(): boolean;
 // ; invalid because of -//     /*not mapped: */ getSegment-impl(): S;
 // ; invalid because of -    // private value: Object | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}