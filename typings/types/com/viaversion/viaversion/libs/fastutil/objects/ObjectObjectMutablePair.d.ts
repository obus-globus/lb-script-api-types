import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ObjectObjectMutablePair<K extends unknown, V extends unknown> extends Object implements Pair<K, V>, Serializable {
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): ObjectObjectMutablePair<K, V>;
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