import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectLists extends Object {
    static EMPTY_LIST: (Object | null)[];
    static emptyList(): (Object | null)[];
    static shuffle(paramarg0: (Object | null)[], paramarg1: Random): (Object | null)[];
    static singleton(paramarg0: Object | null): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[]): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[], paramarg1: Object): (Object | null)[];
    static unmodifiable(paramarg0: (Object | null)[]): (Object | null)[];
    private constructor()
}