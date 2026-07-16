import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { ReferenceObjectPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceObjectPair.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2ObjectOpenCustomHashMap$MapEntry extends Object implements Reference2ObjectMap$Entry<K, V>, ReferenceObjectPair<K, V>, Map$Entry<K, V> {
    static comparingByKey(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByKey(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static comparingByValue(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<Object, Object>, param1: Map$Entry<Object, Object>) => number;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): ReferenceObjectPair<Object, Object>;
    constructor(null_: Map<Object, Object>)
    constructor(null_: Map<Object, Object>, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown, V extends unknown>(arg0: K): Pair<K, V>;
    right<V extends unknown>(): V;
    right<K extends unknown, V extends unknown>(arg0: V): ReferenceObjectPair<K, V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}