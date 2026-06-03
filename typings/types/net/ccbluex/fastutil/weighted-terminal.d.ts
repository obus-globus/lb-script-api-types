import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
import type { Sequence } from '../../../kotlin/sequences/Sequence.d.ts'
export class weighted-terminal extends Object {
    static weightedFilterSortedBy(paramarg0: (Object | null)[], paramarg1: (param0: Object | null) => number): (Object | null)[];
    static weightedFilterSortedBy(paramarg0: Sequence<Object>, paramarg1: (param0: Object | null) => number): (Object | null)[];
    static weightedFilterSortedByAtLeast(paramarg0: (Object | null)[], paramarg1: number, paramarg2: (param0: Object | null) => number): (Object | null)[];
    static weightedFilterSortedByAtLeast(paramarg0: Sequence<Object>, paramarg1: number, paramarg2: (param0: Object | null) => number): (Object | null)[];
    static weightedFilterSortedByAtMost(paramarg0: (Object | null)[], paramarg1: number, paramarg2: (param0: Object | null) => number): (Object | null)[];
    static weightedFilterSortedByAtMost(paramarg0: Sequence<Object>, paramarg1: number, paramarg2: (param0: Object | null) => number): (Object | null)[];
    static weightedFilterSortedByIn(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => number): (Object | null)[];
    static weightedFilterSortedByIn(paramarg0: Sequence<Object>, paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => number): (Object | null)[];
    static weightedFilterSortedByInternal(paramarg0: Iterator<Object>, paramarg1: (param0: Object | null) => number, paramarg2: (param0: Object | null) => boolean): (Object | null)[];
    static weightedMaxByOrNull(paramarg0: (Object | null)[], paramarg1: (param0: Object | null) => number): Object | null;
    static weightedMaxByOrNull(paramarg0: Sequence<Object>, paramarg1: (param0: Object | null) => number): Object | null;
    static weightedMaxByOrNullAtLeast(paramarg0: (Object | null)[], paramarg1: number, paramarg2: (param0: Object | null) => number): Object | null;
    static weightedMaxByOrNullAtLeast(paramarg0: Sequence<Object>, paramarg1: number, paramarg2: (param0: Object | null) => number): Object | null;
    static weightedMaxByOrNullAtMost(paramarg0: (Object | null)[], paramarg1: number, paramarg2: (param0: Object | null) => number): Object | null;
    static weightedMaxByOrNullAtMost(paramarg0: Sequence<Object>, paramarg1: number, paramarg2: (param0: Object | null) => number): Object | null;
    static weightedMaxByOrNullIn(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => number): Object | null;
    static weightedMaxByOrNullIn(paramarg0: Sequence<Object>, paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => number): Object | null;
    static weightedMaxByOrNullInternal(paramarg0: Iterator<Object>, paramarg1: (param0: Object | null) => number, paramarg2: (param0: Object | null) => boolean): Object | null;
    static weightedMinByOrNull(paramarg0: (Object | null)[], paramarg1: (param0: Object | null) => number): Object | null;
    static weightedMinByOrNull(paramarg0: Sequence<Object>, paramarg1: (param0: Object | null) => number): Object | null;
    static weightedMinByOrNullAtLeast(paramarg0: (Object | null)[], paramarg1: number, paramarg2: (param0: Object | null) => number): Object | null;
    static weightedMinByOrNullAtLeast(paramarg0: Sequence<Object>, paramarg1: number, paramarg2: (param0: Object | null) => number): Object | null;
    static weightedMinByOrNullAtMost(paramarg0: (Object | null)[], paramarg1: number, paramarg2: (param0: Object | null) => number): Object | null;
    static weightedMinByOrNullAtMost(paramarg0: Sequence<Object>, paramarg1: number, paramarg2: (param0: Object | null) => number): Object | null;
    static weightedMinByOrNullIn(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => number): Object | null;
    static weightedMinByOrNullIn(paramarg0: Sequence<Object>, paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => number): Object | null;
    static weightedMinByOrNullInternal(paramarg0: Iterator<Object>, paramarg1: (param0: Object | null) => number, paramarg2: (param0: Object | null) => boolean): Object | null;
}