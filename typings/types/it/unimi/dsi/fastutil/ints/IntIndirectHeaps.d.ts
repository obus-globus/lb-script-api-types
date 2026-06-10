import type { IntComparator } from '../../../../../it/unimi/dsi/fastutil/ints/IntComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntIndirectHeaps extends Object {
    static downHeap(paramarg0: number[], paramarg1: number[], paramarg2: number[], paramarg3: number, paramarg4: number, paramarg5: (param0: number, param1: number) => number): number;
    static makeHeap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: number[], paramarg5: (param0: number, param1: number) => number): void;
    static makeHeap(paramarg0: number[], paramarg1: number[], paramarg2: number[], paramarg3: number, paramarg4: (param0: number, param1: number) => number): void;
    static upHeap(paramarg0: number[], paramarg1: number[], paramarg2: number[], paramarg3: number, paramarg4: number, paramarg5: (param0: number, param1: number) => number): number;
    private constructor()
}