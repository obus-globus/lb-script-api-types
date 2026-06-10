import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharHeaps extends Object {
    static downHeap(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: (param0: string, param1: string) => number): number;
    static makeHeap(paramarg0: string[], paramarg1: number, paramarg2: (param0: string, param1: string) => number): void;
    static upHeap(paramarg0: string[], paramarg1: number, paramarg2: number, paramarg3: (param0: string, param1: string) => number): number;
    private constructor()
}