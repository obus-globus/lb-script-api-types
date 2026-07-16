import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectSortedSets extends Object {
    static emptySet(): (Object | null)[];
    static singleton(paramarg0: Object | null): (Object | null)[];
    static singleton(paramarg0: Object | null, paramarg1: (param0: Object, param1: Object) => number): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[]): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[], paramarg1: Object): (Object | null)[];
    static unmodifiable(paramarg0: (Object | null)[]): (Object | null)[];
    private constructor()
}