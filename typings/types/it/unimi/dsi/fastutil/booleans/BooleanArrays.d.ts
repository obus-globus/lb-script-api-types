import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanArrays extends Object {
    static DEFAULT_EMPTY_ARRAY: boolean[];
    static EMPTY_ARRAY: boolean[];
    static HASH_STRATEGY: Hash$Strategy<boolean[]>;
    static copy(paramarg0: boolean[]): boolean[];
    static copy(paramarg0: boolean[], paramarg1: number, paramarg2: number): boolean[];
    static ensureCapacity(paramarg0: boolean[], paramarg1: number): boolean[];
    static ensureCapacity(paramarg0: boolean[], paramarg1: number, paramarg2: number): boolean[];
    static ensureFromTo(paramarg0: boolean[], paramarg1: number, paramarg2: number): void;
    static ensureOffsetLength(paramarg0: boolean[], paramarg1: number, paramarg2: number): void;
    static ensureSameLength(paramarg0: boolean[], paramarg1: boolean[]): void;
    static equals(paramarg0: boolean[], paramarg1: boolean[]): boolean;
    static fill(paramarg0: boolean[], paramarg1: boolean): void;
    static fill(paramarg0: boolean[], paramarg1: number, paramarg2: number, paramarg3: boolean): void;
    static forceCapacity(paramarg0: boolean[], paramarg1: number, paramarg2: number): boolean[];
    static grow(paramarg0: boolean[], paramarg1: number): boolean[];
    static grow(paramarg0: boolean[], paramarg1: number, paramarg2: number): boolean[];
    static mergeSort(paramarg0: boolean[]): void;
    static mergeSort(paramarg0: boolean[], paramarg1: number, paramarg2: number): void;
    static mergeSort(paramarg0: boolean[], paramarg1: number, paramarg2: number, paramarg3: boolean[]): void;
    static mergeSort(paramarg0: boolean[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static mergeSort(paramarg0: boolean[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number, paramarg4: boolean[]): void;
    static mergeSort(paramarg0: boolean[], paramarg1: (param0: boolean, param1: boolean) => number): void;
    static parallelQuickSort(paramarg0: boolean[]): void;
    static parallelQuickSort(paramarg0: boolean[], paramarg1: boolean[]): void;
    static parallelQuickSort(paramarg0: boolean[], paramarg1: boolean[], paramarg2: number, paramarg3: number): void;
    static parallelQuickSort(paramarg0: boolean[], paramarg1: number, paramarg2: number): void;
    static parallelQuickSort(paramarg0: boolean[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static parallelQuickSort(paramarg0: boolean[], paramarg1: (param0: boolean, param1: boolean) => number): void;
    static parallelQuickSortIndirect(paramarg0: number[], paramarg1: boolean[]): void;
    static parallelQuickSortIndirect(paramarg0: number[], paramarg1: boolean[], paramarg2: number, paramarg3: number): void;
    static quickSort(paramarg0: boolean[]): void;
    static quickSort(paramarg0: boolean[], paramarg1: boolean[]): void;
    static quickSort(paramarg0: boolean[], paramarg1: boolean[], paramarg2: number, paramarg3: number): void;
    static quickSort(paramarg0: boolean[], paramarg1: number, paramarg2: number): void;
    static quickSort(paramarg0: boolean[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static quickSort(paramarg0: boolean[], paramarg1: (param0: boolean, param1: boolean) => number): void;
    static quickSortIndirect(paramarg0: number[], paramarg1: boolean[]): void;
    static quickSortIndirect(paramarg0: number[], paramarg1: boolean[], paramarg2: number, paramarg3: number): void;
    static reverse(paramarg0: boolean[]): boolean[];
    static reverse(paramarg0: boolean[], paramarg1: number, paramarg2: number): boolean[];
    static setLength(paramarg0: boolean[], paramarg1: number): boolean[];
    static shuffle(paramarg0: boolean[], paramarg1: number, paramarg2: number, paramarg3: Random): boolean[];
    static shuffle(paramarg0: boolean[], paramarg1: Random): boolean[];
    static stabilize(paramarg0: number[], paramarg1: boolean[]): void;
    static stabilize(paramarg0: number[], paramarg1: boolean[], paramarg2: number, paramarg3: number): void;
    static stableSort(paramarg0: boolean[]): void;
    static stableSort(paramarg0: boolean[], paramarg1: number, paramarg2: number): void;
    static stableSort(paramarg0: boolean[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static stableSort(paramarg0: boolean[], paramarg1: (param0: boolean, param1: boolean) => number): void;
    static swap(paramarg0: boolean[], paramarg1: number, paramarg2: number): void;
    static swap(paramarg0: boolean[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static trim(paramarg0: boolean[], paramarg1: number): boolean[];
    static unstableSort(paramarg0: boolean[]): void;
    static unstableSort(paramarg0: boolean[], paramarg1: number, paramarg2: number): void;
    static unstableSort(paramarg0: boolean[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static unstableSort(paramarg0: boolean[], paramarg1: (param0: boolean, param1: boolean) => number): void;
    private constructor()
}