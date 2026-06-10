import type { CharComparator } from '../../../../../it/unimi/dsi/fastutil/chars/CharComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class CharSortedSets extends Object {
    static EMPTY_SET: (Object | null)[];
    static emptySet(): (Object | null)[];
    static singleton(paramarg0: string): (Object | null)[];
    static singleton(paramarg0: string, paramarg1: (param0: string, param1: string) => number): (Object | null)[];
    static singleton(paramarg0: Object): (Object | null)[];
    static singleton(paramarg0: Object, paramarg1: (param0: string, param1: string) => number): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[]): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[], paramarg1: Object): (Object | null)[];
    static unmodifiable(paramarg0: (Object | null)[]): (Object | null)[];
    private constructor()
}