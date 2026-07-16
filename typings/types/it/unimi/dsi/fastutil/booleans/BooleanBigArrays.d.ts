import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanBigArrays extends Object {
    static DEFAULT_EMPTY_BIG_ARRAY: boolean[][];
    static EMPTY_BIG_ARRAY: boolean[][];
    static HASH_STRATEGY: Hash$Strategy<Object>;
    static copy(paramarg0: boolean[][]): boolean[][];
    static copy(paramarg0: boolean[][], paramarg1: number, paramarg2: number): boolean[][];
    static copy(paramarg0: boolean[][], paramarg1: number, paramarg2: boolean[][], paramarg3: number, paramarg4: number): void;
    static copyFromBig(paramarg0: boolean[][], paramarg1: number, paramarg2: boolean[], paramarg3: number, paramarg4: number): void;
    static copyToBig(paramarg0: boolean[], paramarg1: number, paramarg2: boolean[][], paramarg3: number, paramarg4: number): void;
    static ensureCapacity(paramarg0: boolean[][], paramarg1: number): boolean[][];
    static ensureCapacity(paramarg0: boolean[][], paramarg1: number, paramarg2: number): boolean[][];
    static ensureFromTo(paramarg0: boolean[][], paramarg1: number, paramarg2: number): void;
    static ensureOffsetLength(paramarg0: boolean[][], paramarg1: number, paramarg2: number): void;
    static ensureSameLength(paramarg0: boolean[][], paramarg1: boolean[][]): void;
    static equals(paramarg0: boolean[][], paramarg1: boolean[][]): boolean;
    static fill(paramarg0: boolean[][], paramarg1: boolean): void;
    static fill(paramarg0: boolean[][], paramarg1: number, paramarg2: number, paramarg3: boolean): void;
    static forceCapacity(paramarg0: boolean[][], paramarg1: number, paramarg2: number): boolean[][];
    static get(paramarg0: boolean[][], paramarg1: number): boolean;
    static grow(paramarg0: boolean[][], paramarg1: number): boolean[][];
    static grow(paramarg0: boolean[][], paramarg1: number, paramarg2: number): boolean[][];
    static length(paramarg0: boolean[][]): number;
    static newBigArray(paramarg0: number): boolean[][];
    static parallelQuickSort(paramarg0: boolean[][]): void;
    static parallelQuickSort(paramarg0: boolean[][], paramarg1: (param0: boolean, param1: boolean) => number): void;
    static parallelQuickSort(paramarg0: boolean[][], paramarg1: number, paramarg2: number): void;
    static parallelQuickSort(paramarg0: boolean[][], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static quickSort(paramarg0: boolean[][]): void;
    static quickSort(paramarg0: boolean[][], paramarg1: (param0: boolean, param1: boolean) => number): void;
    static quickSort(paramarg0: boolean[][], paramarg1: number, paramarg2: number): void;
    static quickSort(paramarg0: boolean[][], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => number): void;
    static set(paramarg0: boolean[][], paramarg1: number, paramarg2: boolean): void;
    static setLength(paramarg0: boolean[][], paramarg1: number): boolean[][];
    static shuffle(paramarg0: boolean[][], paramarg1: Random): boolean[][];
    static shuffle(paramarg0: boolean[][], paramarg1: number, paramarg2: number, paramarg3: Random): boolean[][];
    static swap(paramarg0: boolean[][], paramarg1: number, paramarg2: number): void;
    static toString(paramarg0: boolean[][]): string;
    static trim(paramarg0: boolean[][], paramarg1: number): boolean[][];
    static wrap(paramarg0: boolean[]): boolean[][];
    private constructor()
}