import type { SortedPair } from '../../../../../it/unimi/dsi/fastutil/SortedPair.d.ts'
import type { ObjectObjectImmutablePair } from '../../../../../it/unimi/dsi/fastutil/objects/ObjectObjectImmutablePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../java/lang/Comparable.d.ts'
export class ObjectObjectImmutableSortedPair<K extends Comparable<K>> extends ObjectObjectImmutablePair<K, K> implements SortedPair<K>, Serializable {
    static of<K extends Comparable<K>>(paramarg0: K, paramarg1: K): ObjectObjectImmutableSortedPair<K>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): ObjectObjectImmutablePair<K, V>;
    private constructor(arg0: K, arg1: K)
    contains(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    toString(): string;
}