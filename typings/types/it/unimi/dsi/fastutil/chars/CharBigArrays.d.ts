import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharBigArrays extends Object {
    static DEFAULT_EMPTY_BIG_ARRAY: string[][];
    static EMPTY_BIG_ARRAY: string[][];
    static HASH_STRATEGY: Hash$Strategy<Object>;
    static add(paramarg0: string[][], paramarg1: number, paramarg2: string): void;
    static binarySearch(paramarg0: string[][], paramarg1: string): number;
    static binarySearch(paramarg0: string[][], paramarg1: string, paramarg2: (param0: string, param1: string) => number): number;
    static binarySearch(paramarg0: string[][], paramarg1: number, paramarg2: number, paramarg3: string): number;
    static binarySearch(paramarg0: string[][], paramarg1: number, paramarg2: number, paramarg3: string, paramarg4: (param0: string, param1: string) => number): number;
    static copy(paramarg0: string[][]): string[][];
    static copy(paramarg0: string[][], paramarg1: number, paramarg2: number): string[][];
    static copy(paramarg0: string[][], paramarg1: number, paramarg2: string[][], paramarg3: number, paramarg4: number): void;
    static copyFromBig(paramarg0: string[][], paramarg1: number, paramarg2: string[], paramarg3: number, paramarg4: number): void;
    static copyToBig(paramarg0: string[], paramarg1: number, paramarg2: string[][], paramarg3: number, paramarg4: number): void;
    static decr(paramarg0: string[][], paramarg1: number): void;
    static ensureCapacity(paramarg0: string[][], paramarg1: number): string[][];
    static ensureCapacity(paramarg0: string[][], paramarg1: number, paramarg2: number): string[][];
    static ensureFromTo(paramarg0: string[][], paramarg1: number, paramarg2: number): void;
    static ensureOffsetLength(paramarg0: string[][], paramarg1: number, paramarg2: number): void;
    static ensureSameLength(paramarg0: string[][], paramarg1: string[][]): void;
    static equals(paramarg0: string[][], paramarg1: string[][]): boolean;
    static fill(paramarg0: string[][], paramarg1: string): void;
    static fill(paramarg0: string[][], paramarg1: number, paramarg2: number, paramarg3: string): void;
    static forceCapacity(paramarg0: string[][], paramarg1: number, paramarg2: number): string[][];
    static get(paramarg0: string[][], paramarg1: number): string;
    static grow(paramarg0: string[][], paramarg1: number): string[][];
    static grow(paramarg0: string[][], paramarg1: number, paramarg2: number): string[][];
    static incr(paramarg0: string[][], paramarg1: number): void;
    static length(paramarg0: string[][]): number;
    static mul(paramarg0: string[][], paramarg1: number, paramarg2: string): void;
    static newBigArray(paramarg0: number): string[][];
    static parallelQuickSort(paramarg0: string[][]): void;
    static parallelQuickSort(paramarg0: string[][], paramarg1: (param0: string, param1: string) => number): void;
    static parallelQuickSort(paramarg0: string[][], paramarg1: number, paramarg2: number): void;
    static parallelQuickSort(paramarg0: string[][], paramarg1: number, paramarg2: number, paramarg3: (param0: string, param1: string) => number): void;
    static quickSort(paramarg0: string[][]): void;
    static quickSort(paramarg0: string[][], paramarg1: (param0: string, param1: string) => number): void;
    static quickSort(paramarg0: string[][], paramarg1: number, paramarg2: number): void;
    static quickSort(paramarg0: string[][], paramarg1: number, paramarg2: number, paramarg3: (param0: string, param1: string) => number): void;
    static radixSort(paramarg0: string[][]): void;
    static radixSort(paramarg0: string[][], paramarg1: string[][]): void;
    static radixSort(paramarg0: string[][], paramarg1: string[][], paramarg2: number, paramarg3: number): void;
    static radixSort(paramarg0: string[][], paramarg1: number, paramarg2: number): void;
    static radixSortIndirect(paramarg0: number[][], paramarg1: string[][], paramarg2: string[][], paramarg3: boolean): void;
    static radixSortIndirect(paramarg0: number[][], paramarg1: string[][], paramarg2: string[][], paramarg3: number, paramarg4: number, paramarg5: boolean): void;
    static set(paramarg0: string[][], paramarg1: number, paramarg2: string): void;
    static setLength(paramarg0: string[][], paramarg1: number): string[][];
    static shuffle(paramarg0: string[][], paramarg1: Random): string[][];
    static shuffle(paramarg0: string[][], paramarg1: number, paramarg2: number, paramarg3: Random): string[][];
    static swap(paramarg0: string[][], paramarg1: number, paramarg2: number): void;
    static toString(paramarg0: string[][]): string;
    static trim(paramarg0: string[][], paramarg1: number): string[][];
    static wrap(paramarg0: string[]): string[][];
    private constructor()
}