import type { Range } from '../../../../../com/oracle/truffle/regex/charset/Range.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ImmutableSortedListOfRanges$IntersectAndSubtractResult<T extends Range[]> extends Object {
    constructor(subtractedA: T, subtractedB: T, intersected: T)
    intersection: T;
    subtractedA: T;
    subtractedB: T;
}