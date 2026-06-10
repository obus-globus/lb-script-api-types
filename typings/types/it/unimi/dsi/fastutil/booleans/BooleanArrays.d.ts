import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanArrays extends Object {
    static DEFAULT_EMPTY_ARRAY: (Object | null)[];
    static EMPTY_ARRAY: (Object | null)[];
    static HASH_STRATEGY: Hash$Strategy<(Object | null)[]>;
    static copy(paramarg0: (Object | null)[]): (Object | null)[];
    static copy(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): (Object | null)[];
    static ensureCapacity(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static ensureCapacity(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): (Object | null)[];
    static ensureFromTo(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static ensureOffsetLength(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static ensureSameLength(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): void;
    static equals(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): boolean;
    static fill(paramarg0: (Object | null)[], paramarg1: boolean): void;
    static fill(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: boolean): void;
    static forceCapacity(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): (Object | null)[];
    static grow(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static grow(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): (Object | null)[];
    static mergeSort(paramarg0: (Object | null)[]): void;
    static mergeSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static mergeSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (Object | null)[]): void;
    static mergeSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static mergeSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number, paramarg4: (Object | null)[]): void;
    static mergeSort(paramarg0: (Object | null)[], paramarg1: (param0: boolean, param1: boolean) => number): void;
    static parallelQuickSort(paramarg0: (Object | null)[]): void;
    static parallelQuickSort(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): void;
    static parallelQuickSort(paramarg0: (Object | null)[], paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): void;
    static parallelQuickSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static parallelQuickSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static parallelQuickSort(paramarg0: (Object | null)[], paramarg1: (param0: boolean, param1: boolean) => number): void;
    static parallelQuickSortIndirect(paramarg0: number[], paramarg1: (Object | null)[]): void;
    static parallelQuickSortIndirect(paramarg0: number[], paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): void;
    static quickSort(paramarg0: (Object | null)[]): void;
    static quickSort(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): void;
    static quickSort(paramarg0: (Object | null)[], paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): void;
    static quickSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static quickSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static quickSort(paramarg0: (Object | null)[], paramarg1: (param0: boolean, param1: boolean) => number): void;
    static quickSortIndirect(paramarg0: number[], paramarg1: (Object | null)[]): void;
    static quickSortIndirect(paramarg0: number[], paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): void;
    static reverse(paramarg0: (Object | null)[]): (Object | null)[];
    static reverse(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): (Object | null)[];
    static setLength(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static shuffle(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: Random): (Object | null)[];
    static shuffle(paramarg0: (Object | null)[], paramarg1: Random): (Object | null)[];
    static stabilize(paramarg0: number[], paramarg1: (Object | null)[]): void;
    static stabilize(paramarg0: number[], paramarg1: (Object | null)[], paramarg2: number, paramarg3: number): void;
    static stableSort(paramarg0: (Object | null)[]): void;
    static stableSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static stableSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static stableSort(paramarg0: (Object | null)[], paramarg1: (param0: boolean, param1: boolean) => number): void;
    static swap(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static swap(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static trim(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static unstableSort(paramarg0: (Object | null)[]): void;
    static unstableSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static unstableSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static unstableSort(paramarg0: (Object | null)[], paramarg1: (param0: boolean, param1: boolean) => number): void;
    private constructor()
}