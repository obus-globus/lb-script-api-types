import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectObjectImmutablePair<K extends unknown, V extends unknown> extends Object implements Pair<K, V>, Serializable {
    static lexComparator(): (param0: Pair<Object, Object>, param1: Pair<Object, Object>) => number;
    static of(paramarg0: Object | null, paramarg1: Object | null): ObjectObjectImmutablePair<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    constructor(arg0: K, arg1: V)
    // private left: K;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first(): K;
    first(arg0: K): Pair<K, V>;
    hashCode(): number;
    key(): K;
    key(arg0: K): Pair<K, V>;
    left(arg0: K): Pair<K, V>;
    left(): K;
    right(arg0: V): Pair<K, V>;
    right(): V;
    second(): V;
    second(arg0: V): Pair<K, V>;
    toString(): string;
    value(): V;
    value(arg0: V): Pair<K, V>;
}