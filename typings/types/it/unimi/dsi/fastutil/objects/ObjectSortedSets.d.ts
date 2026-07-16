import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectSortedSets extends Object {
    static EMPTY_SET: (Object | null)[];
    static emptySet<K extends unknown>(): K[];
    static singleton<K extends unknown>(paramarg0: K): K[];
    static singleton<K extends unknown>(paramarg0: K, paramarg1: (param0: Object, param1: Object) => number): K[];
    static synchronize<K extends unknown>(paramarg0: K[]): K[];
    static synchronize<K extends unknown>(paramarg0: K[], paramarg1: Object): K[];
    static unmodifiable<K extends unknown>(paramarg0: K[]): K[];
    private constructor()
}