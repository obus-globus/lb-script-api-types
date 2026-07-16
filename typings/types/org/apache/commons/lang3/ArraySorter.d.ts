import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ArraySorter extends Object {
    static sort(paramarg0: (Object | null)[]): (Object | null)[];
    static sort(paramarg0: (Object | null)[], paramarg1: (param0: Object, param1: Object) => number): (Object | null)[];
    static sort(paramarg0: number[]): number[];
    static sort(paramarg0: string[]): string[];
    constructor()
}