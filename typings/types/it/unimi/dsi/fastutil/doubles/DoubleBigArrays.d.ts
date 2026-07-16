import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleBigArrays extends Object {
    static DEFAULT_EMPTY_BIG_ARRAY: number[][];
    static EMPTY_BIG_ARRAY: number[][];
    static HASH_STRATEGY: Hash$Strategy<Object>;
    static add(paramarg0: number[][], paramarg1: number, paramarg2: number): void;
    static binarySearch(paramarg0: number[][], paramarg1: number): number;
    static binarySearch(paramarg0: number[][], paramarg1: number, paramarg2: (param0: number, param1: number) => number): number;
    static binarySearch(paramarg0: number[][], paramarg1: number, paramarg2: number, paramarg3: number): number;
    static binarySearch(paramarg0: number[][], paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: (param0: number, param1: number) => number): number;
    static copy(paramarg0: number[][]): number[][];
    static copy(paramarg0: number[][], paramarg1: number, paramarg2: number): number[][];
    static copy(paramarg0: number[][], paramarg1: number, paramarg2: number[][], paramarg3: number, paramarg4: number): void;
    static copyFromBig(paramarg0: number[][], paramarg1: number, paramarg2: number[], paramarg3: number, paramarg4: number): void;
    static copyToBig(paramarg0: number[], paramarg1: number, paramarg2: number[][], paramarg3: number, paramarg4: number): void;
    static decr(paramarg0: number[][], paramarg1: number): void;
    static ensureCapacity(paramarg0: number[][], paramarg1: number): number[][];
    static ensureCapacity(paramarg0: number[][], paramarg1: number, paramarg2: number): number[][];
    static ensureFromTo(paramarg0: number[][], paramarg1: number, paramarg2: number): void;
    static ensureOffsetLength(paramarg0: number[][], paramarg1: number, paramarg2: number): void;
    static ensureSameLength(paramarg0: number[][], paramarg1: number[][]): void;
    static equals(paramarg0: number[][], paramarg1: number[][]): boolean;
    static fill(paramarg0: number[][], paramarg1: number): void;
    static fill(paramarg0: number[][], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static forceCapacity(paramarg0: number[][], paramarg1: number, paramarg2: number): number[][];
    static get(paramarg0: number[][], paramarg1: number): number;
    static grow(paramarg0: number[][], paramarg1: number): number[][];
    static grow(paramarg0: number[][], paramarg1: number, paramarg2: number): number[][];
    static incr(paramarg0: number[][], paramarg1: number): void;
    static length(paramarg0: number[][]): number;
    static mul(paramarg0: number[][], paramarg1: number, paramarg2: number): void;
    static newBigArray(paramarg0: number): number[][];
    static parallelQuickSort(paramarg0: number[][]): void;
    static parallelQuickSort(paramarg0: number[][], paramarg1: (param0: number, param1: number) => number): void;
    static parallelQuickSort(paramarg0: number[][], paramarg1: number, paramarg2: number): void;
    static parallelQuickSort(paramarg0: number[][], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): void;
    static quickSort(paramarg0: number[][]): void;
    static quickSort(paramarg0: number[][], paramarg1: (param0: number, param1: number) => number): void;
    static quickSort(paramarg0: number[][], paramarg1: number, paramarg2: number): void;
    static quickSort(paramarg0: number[][], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): void;
    static radixSort(paramarg0: number[][]): void;
    static radixSort(paramarg0: number[][], paramarg1: number[][]): void;
    static radixSort(paramarg0: number[][], paramarg1: number[][], paramarg2: number, paramarg3: number): void;
    static radixSort(paramarg0: number[][], paramarg1: number, paramarg2: number): void;
    static radixSortIndirect(paramarg0: number[][], paramarg1: number[][], paramarg2: number[][], paramarg3: boolean): void;
    static radixSortIndirect(paramarg0: number[][], paramarg1: number[][], paramarg2: number[][], paramarg3: number, paramarg4: number, paramarg5: boolean): void;
    static set(paramarg0: number[][], paramarg1: number, paramarg2: number): void;
    static setLength(paramarg0: number[][], paramarg1: number): number[][];
    static shuffle(paramarg0: number[][], paramarg1: Random): number[][];
    static shuffle(paramarg0: number[][], paramarg1: number, paramarg2: number, paramarg3: Random): number[][];
    static swap(paramarg0: number[][], paramarg1: number, paramarg2: number): void;
    static toString(paramarg0: number[][]): string;
    static trim(paramarg0: number[][], paramarg1: number): number[][];
    static wrap(paramarg0: number[]): number[][];
    private constructor()
}