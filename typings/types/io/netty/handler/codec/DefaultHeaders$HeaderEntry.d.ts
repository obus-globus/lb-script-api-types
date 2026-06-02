import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class DefaultHeaders$HeaderEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Map$Entry<K, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    constructor()
    constructor(arg0: number, arg1: K)
    constructor(arg0: number, arg1: K, arg2: V, arg3: DefaultHeaders$HeaderEntry<K, V>, arg4: DefaultHeaders$HeaderEntry<K, V>)
    // private after: DefaultHeaders$HeaderEntry<K, V>;
    // private before: DefaultHeaders$HeaderEntry<K, V>;
    // private hash: number;
    readonly key: K;
    readonly key: K;
    // private next: DefaultHeaders$HeaderEntry<K, V>;
    value: V;
    readonly value: V;
    after(): DefaultHeaders$HeaderEntry<K, V>;
    before(): DefaultHeaders$HeaderEntry<K, V>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    pointNeighborsToThis(): void;
    remove(): void;
    setValue(arg0: V): V;
    toString(): string;
}