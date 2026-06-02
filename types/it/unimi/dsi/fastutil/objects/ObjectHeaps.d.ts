import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectHeaps extends Object {
    static downHeap(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => kotlin.Boolean): number;
    static makeHeap(paramarg0: Object | null, paramarg1: number, paramarg2: (param0: Object | null) => kotlin.Boolean): void;
    static upHeap(paramarg0: Object | null, paramarg1: number, paramarg2: number, paramarg3: (param0: Object | null) => kotlin.Boolean): number;
    private constructor()
}