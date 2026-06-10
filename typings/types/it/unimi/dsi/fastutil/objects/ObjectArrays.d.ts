import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectArrays extends Object {
    static DEFAULT_EMPTY_ARRAY: (Object | null)[];
    static EMPTY_ARRAY: (Object | null)[];
    static HASH_STRATEGY: Hash$Strategy<Object>;
    static binarySearch(paramarg0: Object | null, paramarg1: Object | null): number;
    static binarySearch(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object) => boolean): number;
    static binarySearch(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: Object | null): number;
    static binarySearch(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: Object | null, paramarg4: (param0: Object) => boolean): number;
    static copy(paramarg0: Object | null): Object | null;
    static copy(paramarg0: Object | null, paramarg1: number, paramarg2: number): Object | null;
    static ensureCapacity(paramarg0: Object | null, paramarg1: number): Object | null;
    static ensureCapacity(paramarg0: Object | null, paramarg1: number, paramarg2: number): Object | null;
    static ensureFromTo(paramarg0: Object | null, paramarg1: number, paramarg2: number): void;
    static ensureOffsetLength(paramarg0: Object | null, paramarg1: number, paramarg2: number): void;
    static ensureSameLength(paramarg0: Object | null, paramarg1: Object | null): void;
    static equals(paramarg0: Object | null, paramarg1: Object | null): boolean;
    static fill(paramarg0: Object | null, paramarg1: Object | null): void;
    static fill(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: Object | null): void;
    static forceCapacity(paramarg0: Object | null, paramarg1: number, paramarg2: number): Object | null;
    static grow(paramarg0: Object | null, paramarg1: number): Object | null;
    static grow(paramarg0: Object | null, paramarg1: number, paramarg2: number): Object | null;
    static mergeSort(paramarg0: Object | null): void;
    static mergeSort(paramarg0: Object | null, paramarg1: number, paramarg2: number): void;
    static mergeSort(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: Object | null): void;
    static mergeSort(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: (param0: Object) => boolean): void;
    static mergeSort(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: (param0: Object) => boolean, paramarg4: Object | null): void;
    static mergeSort(paramarg0: Object | null, paramarg1: (param0: Object) => boolean): void;
    static parallelQuickSort(paramarg0: Object | null): void;
    static parallelQuickSort(paramarg0: Object | null, paramarg1: Object | null): void;
    static parallelQuickSort(paramarg0: Object | null, paramarg1: Object | null, paramarg2: number, paramarg3: number): void;
    static parallelQuickSort(paramarg0: Object | null, paramarg1: number, paramarg2: number): void;
    static parallelQuickSort(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: (param0: Object) => boolean): void;
    static parallelQuickSort(paramarg0: Object | null, paramarg1: (param0: Object) => boolean): void;
    static parallelQuickSortIndirect(paramarg0: number[], paramarg1: Object | null): void;
    static parallelQuickSortIndirect(paramarg0: number[], paramarg1: Object | null, paramarg2: number, paramarg3: number): void;
    static quickSort(paramarg0: Object | null): void;
    static quickSort(paramarg0: Object | null, paramarg1: Object | null): void;
    static quickSort(paramarg0: Object | null, paramarg1: Object | null, paramarg2: number, paramarg3: number): void;
    static quickSort(paramarg0: Object | null, paramarg1: number, paramarg2: number): void;
    static quickSort(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: (param0: Object) => boolean): void;
    static quickSort(paramarg0: Object | null, paramarg1: (param0: Object) => boolean): void;
    static quickSortIndirect(paramarg0: number[], paramarg1: Object | null): void;
    static quickSortIndirect(paramarg0: number[], paramarg1: Object | null, paramarg2: number, paramarg3: number): void;
    static reverse(paramarg0: Object | null): Object | null;
    static reverse(paramarg0: Object | null, paramarg1: number, paramarg2: number): Object | null;
    static setLength(paramarg0: Object | null, paramarg1: number): Object | null;
    static shuffle(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: Random): Object | null;
    static shuffle(paramarg0: Object | null, paramarg1: Random): Object | null;
    static stabilize(paramarg0: number[], paramarg1: Object | null): void;
    static stabilize(paramarg0: number[], paramarg1: Object | null, paramarg2: number, paramarg3: number): void;
    static stableSort(paramarg0: Object | null): void;
    static stableSort(paramarg0: Object | null, paramarg1: number, paramarg2: number): void;
    static stableSort(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: (param0: Object) => boolean): void;
    static stableSort(paramarg0: Object | null, paramarg1: (param0: Object) => boolean): void;
    static swap(paramarg0: Object | null, paramarg1: number, paramarg2: number): void;
    static swap(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: number): void;
    static trim(paramarg0: Object | null, paramarg1: number): Object | null;
    static unstableSort(paramarg0: Object | null): void;
    static unstableSort(paramarg0: Object | null, paramarg1: number, paramarg2: number): void;
    static unstableSort(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: (param0: Object) => boolean): void;
    static unstableSort(paramarg0: Object | null, paramarg1: (param0: Object) => boolean): void;
    private constructor()
}