import type { SortedPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/SortedPair.d.ts'
import type { ObjectObjectImmutablePair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ObjectObjectImmutablePair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
export class ObjectObjectImmutableSortedPair<K extends Comparable<K>> extends ObjectObjectImmutablePair<K, K> implements SortedPair<K>, Serializable {
    static of(paramarg0: Object | null, paramarg1: Object | null): SortedPair<any>;
    static of(paramarg0: Object | null, paramarg1: Object | null): ObjectObjectImmutableSortedPair<any>;
    static of(paramarg0: Object | null, paramarg1: Object | null): ObjectObjectImmutablePair<Object, Object>;
    private constructor(arg0: K, arg1: K)
    contains(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    toString(): string;
}