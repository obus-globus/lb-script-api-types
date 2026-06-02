import type { Hash$Strategy } from '../../../../../it/unimi/dsi/fastutil/Hash$Strategy.d.ts'
import type { BooleanComparator } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanComparator.d.ts'
import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanBigArrays extends Object {
    static DEFAULT_EMPTY_BIG_ARRAY: (Object | null)[];
    static EMPTY_BIG_ARRAY: (Object | null)[];
    static HASH_STRATEGY: Hash$Strategy<Object>;
    static copy(paramarg0: (Object | null)[]): (Object | null)[];
    static copy(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): (Object | null)[];
    static copy(paramarg0: (Object | null)[], paramarg1: number, paramarg2: (Object | null)[], paramarg3: number, paramarg4: number): void;
    static copyFromBig(paramarg0: (Object | null)[], paramarg1: number, paramarg2: (Object | null)[], paramarg3: number, paramarg4: number): void;
    static copyToBig(paramarg0: (Object | null)[], paramarg1: number, paramarg2: (Object | null)[], paramarg3: number, paramarg4: number): void;
    static ensureCapacity(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static ensureCapacity(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): (Object | null)[];
    static ensureFromTo(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static ensureOffsetLength(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static ensureSameLength(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): void;
    static equals(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): boolean;
    static fill(paramarg0: (Object | null)[], paramarg1: boolean): void;
    static fill(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: boolean): void;
    static forceCapacity(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): (Object | null)[];
    static get(paramarg0: (Object | null)[], paramarg1: number): boolean;
    static grow(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static grow(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): (Object | null)[];
    static length(paramarg0: (Object | null)[]): number;
    static newBigArray(paramarg0: number): (Object | null)[];
    static parallelQuickSort(paramarg0: (Object | null)[]): void;
    static parallelQuickSort(paramarg0: (Object | null)[], paramarg1: (param0: boolean, param1: boolean) => kotlin.Int): void;
    static parallelQuickSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static parallelQuickSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => kotlin.Int): void;
    static quickSort(paramarg0: (Object | null)[]): void;
    static quickSort(paramarg0: (Object | null)[], paramarg1: (param0: boolean, param1: boolean) => kotlin.Int): void;
    static quickSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static quickSort(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: (param0: boolean, param1: boolean) => kotlin.Int): void;
    static set(paramarg0: (Object | null)[], paramarg1: number, paramarg2: boolean): void;
    static setLength(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static shuffle(paramarg0: (Object | null)[], paramarg1: Random): (Object | null)[];
    static shuffle(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number, paramarg3: Random): (Object | null)[];
    static swap(paramarg0: (Object | null)[], paramarg1: number, paramarg2: number): void;
    static toString(paramarg0: (Object | null)[]): string;
    static trim(paramarg0: (Object | null)[], paramarg1: number): (Object | null)[];
    static wrap(paramarg0: (Object | null)[]): (Object | null)[];
    private constructor()
}