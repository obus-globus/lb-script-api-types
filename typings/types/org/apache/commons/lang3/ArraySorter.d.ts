import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ArraySorter extends Object {
    static sort<T extends unknown>(paramarg0: T[]): T[];
    static sort<T extends unknown>(paramarg0: T[], paramarg1: (param0: Object, param1: Object) => number): T[];
    static sort(paramarg0: number[]): number[];
    static sort(paramarg0: string[]): string[];
    constructor()
}