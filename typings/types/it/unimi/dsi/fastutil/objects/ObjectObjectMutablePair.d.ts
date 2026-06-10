import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectObjectMutablePair<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Pair<K, V>, Serializable {
    static lexComparator(): (param0: Object) => boolean;
    static of(paramarg0: Object | null, paramarg1: Object | null): ObjectObjectMutablePair<Object, Object>;
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
    left(arg0: K): ObjectObjectMutablePair<K, V>;
    right(arg0: V): Pair<K, V>;
    right(): V;
    right(arg0: V): ObjectObjectMutablePair<K, V>;
    second(): V;
    second(arg0: V): Pair<K, V>;
    toString(): string;
    value(): V;
    value(arg0: V): Pair<K, V>;
}