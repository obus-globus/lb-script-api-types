import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectBigArrays extends Object {
    static DEFAULT_EMPTY_BIG_ARRAY: Object[][];
    static EMPTY_BIG_ARRAY: Object[][];
    static HASH_STRATEGY: Hash$Strategy<Object>;
    static binarySearch<K extends unknown>(paramarg0: K[][], paramarg1: K, paramarg2: (param0: K, param1: K) => number): number;
    static binarySearch<K extends unknown>(paramarg0: K[][], paramarg1: Object): number;
    static binarySearch<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number, paramarg3: K): number;
    static binarySearch<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number, paramarg3: K, paramarg4: (param0: K, param1: K) => number): number;
    static copy<K extends unknown>(paramarg0: K[][]): K[][];
    static copy<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number): K[][];
    static copy<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: K[][], paramarg3: number, paramarg4: number): void;
    static copyFromBig<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: K[], paramarg3: number, paramarg4: number): void;
    static copyToBig<K extends unknown>(paramarg0: K[], paramarg1: number, paramarg2: K[][], paramarg3: number, paramarg4: number): void;
    static ensureCapacity<K extends unknown>(paramarg0: K[][], paramarg1: number): K[][];
    static ensureCapacity<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number): K[][];
    static ensureFromTo<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number): void;
    static ensureOffsetLength<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number): void;
    static ensureSameLength<K extends unknown>(paramarg0: K[][], paramarg1: K[][]): void;
    static equals<K extends unknown>(paramarg0: K[][], paramarg1: K[][]): boolean;
    static fill<K extends unknown>(paramarg0: K[][], paramarg1: K): void;
    static fill<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number, paramarg3: K): void;
    static forceCapacity<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number): K[][];
    static get<K extends unknown>(paramarg0: K[][], paramarg1: number): K;
    static grow<K extends unknown>(paramarg0: K[][], paramarg1: number): K[][];
    static grow<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number): K[][];
    static length<K extends unknown>(paramarg0: K[][]): number;
    static newBigArray<K extends unknown>(paramarg0: K[][], paramarg1: number): K[][];
    static newBigArray(paramarg0: Class<Object>, paramarg1: number): Object[][];
    static newBigArray(paramarg0: number): Object[][];
    static parallelQuickSort<K extends unknown>(paramarg0: K[][]): void;
    static parallelQuickSort<K extends unknown>(paramarg0: K[][], paramarg1: (param0: K, param1: K) => number): void;
    static parallelQuickSort<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number): void;
    static parallelQuickSort<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number, paramarg3: (param0: K, param1: K) => number): void;
    static quickSort<K extends unknown>(paramarg0: K[][]): void;
    static quickSort<K extends unknown>(paramarg0: K[][], paramarg1: (param0: K, param1: K) => number): void;
    static quickSort<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number): void;
    static quickSort<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number, paramarg3: (param0: K, param1: K) => number): void;
    static set<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: K): void;
    static setLength<K extends unknown>(paramarg0: K[][], paramarg1: number): K[][];
    static shuffle<K extends unknown>(paramarg0: K[][], paramarg1: Random): K[][];
    static shuffle<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number, paramarg3: Random): K[][];
    static swap<K extends unknown>(paramarg0: K[][], paramarg1: number, paramarg2: number): void;
    static toString<K extends unknown>(paramarg0: K[][]): string;
    static trim<K extends unknown>(paramarg0: K[][], paramarg1: number): K[][];
    static wrap<K extends unknown>(paramarg0: K[]): K[][];
    private constructor()
}