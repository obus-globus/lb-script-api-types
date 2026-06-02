import type { FloatComparator } from '../../../../../it/unimi/dsi/fastutil/floats/FloatComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatSemiIndirectHeaps extends Object {
    static downHeap(paramarg0: number[], paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: (param0: number, param1: number) => kotlin.Int): number;
    static front(paramarg0: number[], paramarg1: number[], paramarg2: number, paramarg3: number[]): number;
    static front(paramarg0: number[], paramarg1: number[], paramarg2: number, paramarg3: number[], paramarg4: (param0: number, param1: number) => kotlin.Int): number;
    static makeHeap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: (param0: number, param1: number) => kotlin.Int): number[];
    static makeHeap(paramarg0: number[], paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: (param0: number, param1: number) => kotlin.Int): void;
    static makeHeap(paramarg0: number[], paramarg1: number[], paramarg2: number, paramarg3: (param0: number, param1: number) => kotlin.Int): void;
    static upHeap(paramarg0: number[], paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: (param0: number, param1: number) => kotlin.Int): number;
    private constructor()
}