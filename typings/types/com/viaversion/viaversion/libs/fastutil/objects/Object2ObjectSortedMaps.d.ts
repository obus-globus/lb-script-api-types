import type { Object2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { ObjectBidirectionalIterator } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectBidirectionalIterator.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Object2ObjectSortedMaps extends Object {
    static emptyMap(): Map<Object | null, Object | null>;
    static entryComparator(paramarg0: (param0: Object, param1: Object) => number): (param0: Object, param1: Object) => number;
    static fastIterable(paramarg0: Map<Object | null, Object | null>): Object2ObjectMap$Entry<Object, Object>[];
    static fastIterator(paramarg0: Map<Object | null, Object | null>): ObjectBidirectionalIterator<Object2ObjectMap$Entry<Object, Object>>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null): Map<Object | null, Object | null>;
    static singleton(paramarg0: Object | null, paramarg1: Object | null, paramarg2: (param0: Object, param1: Object) => number): Map<Object | null, Object | null>;
    static synchronize(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    static synchronize(paramarg0: Map<Object | null, Object | null>, paramarg1: Object): Map<Object | null, Object | null>;
    static unmodifiable(paramarg0: Map<Object | null, Object | null>): Map<Object | null, Object | null>;
    private constructor()
}