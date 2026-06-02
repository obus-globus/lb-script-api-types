import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharBigLists extends Object {
    static EMPTY_BIG_LIST: (Object | null)[];
    static asBigList(paramarg0: (Object | null)[]): (Object | null)[];
    static shuffle(paramarg0: (Object | null)[], paramarg1: Random): (Object | null)[];
    static singleton(paramarg0: string): (Object | null)[];
    static singleton(paramarg0: Object): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[]): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[], paramarg1: Object): (Object | null)[];
    static unmodifiable(paramarg0: (Object | null)[]): (Object | null)[];
    private constructor()
}