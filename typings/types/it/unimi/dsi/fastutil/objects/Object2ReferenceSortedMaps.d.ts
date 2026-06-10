import type { Object2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ReferenceMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Object2ReferenceSortedMaps extends Object {
    static EMPTY_MAP: Map<Object | null, Object | null>;
    static emptyMap(): Map<Object | null, Object | null>;
    static entryComparator(paramarg0: (param0: Object) => boolean): (param0: Object) => boolean;
    static fastIterable(paramarg0: Map<Object | null, Object | null>): Object2ReferenceMap$Entry<Object, Object>[];
    static fastIterator(paramarg0: Map<Object | null, Object | null>): ObjectBidirectionalIterator<Object2ReferenceMap$Entry<Object, Object>>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null): Map<Object | null, Object | null>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object) => boolean): Map<Object | null, Object | null>;
    static synchronize(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static synchronize(paramarg0: Map<Object | null, Object | null>, paramarg1: Object): Map<Object | null, Object | null>;
    static unmodifiable(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    private constructor()
}