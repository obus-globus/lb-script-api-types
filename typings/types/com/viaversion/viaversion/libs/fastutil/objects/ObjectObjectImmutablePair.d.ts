import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectObjectImmutablePair<K extends unknown, V extends unknown> extends Object implements Pair<K, V>, Serializable {
    static lexComparator<L extends unknown, R extends unknown>(): (param0: Pair<L, R>, param1: Pair<L, R>) => number;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): ObjectObjectImmutablePair<K, V>;
    static of<L extends unknown, R extends unknown>(paramarg0: L, paramarg1: R): Pair<L, R>;
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