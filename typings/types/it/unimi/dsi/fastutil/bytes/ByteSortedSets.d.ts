import type { ByteComparator } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteComparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ByteSortedSets extends Object {
    static EMPTY_SET: (Object | null)[];
    static emptySet(): (Object | null)[];
    static singleton(paramarg0: number): (Object | null)[];
    static singleton(paramarg0: number, paramarg1: (param0: number, param1: number) => kotlin.Int): (Object | null)[];
    static singleton(paramarg0: Object): (Object | null)[];
    static singleton(paramarg0: Object, paramarg1: (param0: number, param1: number) => kotlin.Int): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[]): (Object | null)[];
    static synchronize(paramarg0: (Object | null)[], paramarg1: Object): (Object | null)[];
    static unmodifiable(paramarg0: (Object | null)[]): (Object | null)[];
    private constructor()
}