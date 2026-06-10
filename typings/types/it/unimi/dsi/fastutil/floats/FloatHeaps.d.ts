import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatHeaps extends Object {
    static downHeap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): number;
    static makeHeap(paramarg0: number[], paramarg1: number, paramarg2: (param0: number, param1: number) => number): void;
    static upHeap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => number): number;
    private constructor()
}