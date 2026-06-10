import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectSemiIndirectHeaps extends Object {
    static downHeap(paramarg0: Object | null, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: (param0: Object) => boolean): number;
    static front(paramarg0: Object | null, paramarg1: number[], paramarg2: number, paramarg3: number[]): number;
    static front(paramarg0: Object | null, paramarg1: number[], paramarg2: number, paramarg3: number[], paramarg4: (param0: Object) => boolean): number;
    static makeHeap(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: (param0: Object) => boolean): number[];
    static makeHeap(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: number[], paramarg4: (param0: Object) => boolean): void;
    static makeHeap(paramarg0: Object | null, paramarg1: number[], paramarg2: number, paramarg3: (param0: Object) => boolean): void;
    static upHeap(paramarg0: Object | null, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: (param0: Object) => boolean): number;
    private constructor()
}