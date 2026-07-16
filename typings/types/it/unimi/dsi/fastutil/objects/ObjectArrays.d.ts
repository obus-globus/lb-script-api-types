import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectArrays extends Object {
    static DEFAULT_EMPTY_ARRAY: Object[];
    static EMPTY_ARRAY: Object[];
    static HASH_STRATEGY: Hash$Strategy<Object>;
    static binarySearch<K extends unknown>(paramarg0: K[], paramarg1: K): number;
    static binarySearch<K extends unknown>(paramarg0: K[], paramarg1: K, paramarg2: (param0: K, param1: K) => number): number;
    static binarySearch<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: K): number;
    static binarySearch<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: K, paramarg4: (param0: K, param1: K) => number): number;
    static copy<K extends unknown>(paramarg0: K[]): K[];
    static copy<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): K[];
    static ensureCapacity<K extends unknown>(paramarg0: K[], paramarg1: number): K[];
    static ensureCapacity<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): K[];
    static ensureFromTo<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): void;
    static ensureOffsetLength<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): void;
    static ensureSameLength<K extends unknown>(paramarg0: K[], paramarg1: K[]): void;
    static equals<K extends unknown>(paramarg0: K[], paramarg1: K[]): boolean;
    static fill<K extends unknown>(paramarg0: K[], paramarg1: K): void;
    static fill<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: K): void;
    static forceCapacity<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): K[];
    static grow<K extends unknown>(paramarg0: K[], paramarg1: number): K[];
    static grow<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): K[];
    static mergeSort<K extends unknown>(paramarg0: K[]): void;
    static mergeSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): void;
    static mergeSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: K[]): void;
    static mergeSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: (param0: K, param1: K) => number): void;
    static mergeSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: (param0: K, param1: K) => number, paramarg4: K[]): void;
    static mergeSort<K extends unknown>(paramarg0: K[], paramarg1: (param0: K, param1: K) => number): void;
    static parallelQuickSort<K extends unknown>(paramarg0: K[]): void;
    static parallelQuickSort<K extends unknown>(paramarg0: K[], paramarg1: K[]): void;
    static parallelQuickSort<K extends unknown>(paramarg0: K[], paramarg1: K[], paramarg2: number, paramarg3: number): void;
    static parallelQuickSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): void;
    static parallelQuickSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: (param0: K, param1: K) => number): void;
    static parallelQuickSort<K extends unknown>(paramarg0: K[], paramarg1: (param0: K, param1: K) => number): void;
    static parallelQuickSortIndirect<K extends unknown>(paramarg0: number[], paramarg1: K[]): void;
    static parallelQuickSortIndirect<K extends unknown>(paramarg0: number[], paramarg1: K[], paramarg2: number, paramarg3: number): void;
    static quickSort<K extends unknown>(paramarg0: K[]): void;
    static quickSort<K extends unknown>(paramarg0: K[], paramarg1: K[]): void;
    static quickSort<K extends unknown>(paramarg0: K[], paramarg1: K[], paramarg2: number, paramarg3: number): void;
    static quickSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): void;
    static quickSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: (param0: K, param1: K) => number): void;
    static quickSort<K extends unknown>(paramarg0: K[], paramarg1: (param0: K, param1: K) => number): void;
    static quickSortIndirect<K extends unknown>(paramarg0: number[], paramarg1: K[]): void;
    static quickSortIndirect<K extends unknown>(paramarg0: number[], paramarg1: K[], paramarg2: number, paramarg3: number): void;
    static reverse<K extends unknown>(paramarg0: K[]): K[];
    static reverse<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): K[];
    static setLength<K extends unknown>(paramarg0: K[], paramarg1: number): K[];
    static shuffle<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: Random): K[];
    static shuffle<K extends unknown>(paramarg0: K[], paramarg1: Random): K[];
    static stabilize<K extends unknown>(paramarg0: number[], paramarg1: K[]): void;
    static stabilize<K extends unknown>(paramarg0: number[], paramarg1: K[], paramarg2: number, paramarg3: number): void;
    static stableSort<K extends unknown>(paramarg0: K[]): void;
    static stableSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): void;
    static stableSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: (param0: K, param1: K) => number): void;
    static stableSort<K extends unknown>(paramarg0: K[], paramarg1: (param0: K, param1: K) => number): void;
    static swap<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): void;
    static swap<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: number): void;
    static trim<K extends unknown>(paramarg0: K[], paramarg1: number): K[];
    static unstableSort<K extends unknown>(paramarg0: K[]): void;
    static unstableSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number): void;
    static unstableSort<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: number, paramarg3: (param0: K, param1: K) => number): void;
    static unstableSort<K extends unknown>(paramarg0: K[], paramarg1: (param0: K, param1: K) => number): void;
    private constructor()
}