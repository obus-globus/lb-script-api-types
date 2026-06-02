import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class ImmutableEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Map$Entry<K, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    constructor(arg0: K, arg1: V)
    // private k: K;
    readonly key: K;
    // private v: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    setValue(arg0: V): V;
    toString(): string;
}