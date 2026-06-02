import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Reference2ObjectSortedMaps extends Object {
    static EMPTY_MAP: Map<Object | null, Object | null>;
    static emptyMap(): Map<Object | null, Object | null>;
    static entryComparator(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static fastIterable(paramarg0: Map<Object | null, Object | null>): (Object | null)[];
    static fastIterator(paramarg0: Map<Object | null, Object | null>): ObjectBidirectionalIterator<Object>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null): Map<Object | null, Object | null>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object | null) => kotlin.Boolean): Map<Object | null, Object | null>;
    static synchronize(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static synchronize(paramarg0: Map<Object | null, Object | null>, paramarg1: Object): Map<Object | null, Object | null>;
    static unmodifiable(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    private constructor()
}