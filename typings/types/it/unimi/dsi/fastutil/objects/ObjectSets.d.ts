import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectSets extends Object {
    static EMPTY_SET: (Object | null)[];
    static emptySet(): (Object | null)[];
    static singleton(paramarg0: Object | null): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[]): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[], paramarg1: Object): (Object | null)[];
    static unmodifiable(paramarg0: (Object | null)[]): (Object | null)[];
    private constructor()
}