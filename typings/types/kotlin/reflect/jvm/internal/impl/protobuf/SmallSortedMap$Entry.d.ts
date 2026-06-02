import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class SmallSortedMap$Entry extends Object implements Comparable<SmallSortedMap$Entry>, Map$Entry<K, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    constructor(null_: SmallSortedMap$Entry)
    constructor(null_: SmallSortedMap$Entry, arg2: V)
    readonly key: K;
    readonly key: K;
    readonly value: V;
    readonly value: V;
    compareTo(arg0: SmallSortedMap$Entry): number;
    // private equals(arg0: Object, arg1: Object): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}