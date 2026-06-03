import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ObjectObjectImmutablePair<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Pair<K, V>, Serializable {
    static lexComparator(): (param0: Object | null) => kotlin.Boolean;
    static of(paramarg0: Object | null, paramarg1: Object | null): ObjectObjectImmutablePair<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): Pair<Object, Object>;
    constructor(arg0: K, arg1: V)
    // private left: K;
    // private right: V;
    equals(arg0: Object | null): boolean;
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    hashCode(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): K;
    left(arg0: K): Pair<K, V>;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): V;
    right(arg0: V): Pair<K, V>;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    toString(): string;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
}