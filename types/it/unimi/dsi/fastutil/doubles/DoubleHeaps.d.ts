import type { DoubleComparator } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleHeaps extends Object {
    static downHeap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => kotlin.Int): number;
    static makeHeap(paramarg0: number[], paramarg1: number, paramarg2: (param0: number, param1: number) => kotlin.Int): void;
    static upHeap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => kotlin.Int): number;
    private constructor()
}