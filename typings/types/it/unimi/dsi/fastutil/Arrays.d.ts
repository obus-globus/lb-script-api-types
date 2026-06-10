import type { Swapper } from '../../../../it/unimi/dsi/fastutil/Swapper.d.ts'
import type { IntComparator } from '../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Arrays extends Object {
    static MAX_ARRAY_SIZE: number;
    static ensureFromTo(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static ensureOffsetLength(paramarg0: number, paramarg1: number, paramarg2: number): void;
    static mergeSort(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number, paramarg3: (param0: number, param1: number) => void): void;
    static parallelQuickSort(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number, paramarg3: (param0: number, param1: number) => void): void;
    static quickSort(paramarg0: number, paramarg1: number, paramarg2: (param0: number, param1: number) => number, paramarg3: (param0: number, param1: number) => void): void;
    private constructor()
}