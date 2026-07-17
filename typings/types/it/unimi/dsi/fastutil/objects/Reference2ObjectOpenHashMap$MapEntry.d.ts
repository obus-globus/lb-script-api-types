import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { ReferenceObjectPair } from '../../../../../it/unimi/dsi/fastutil/objects/ReferenceObjectPair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class Reference2ObjectOpenHashMap$MapEntry extends Object implements Reference2ObjectMap$Entry<K, V>, ReferenceObjectPair<K, V>, Map$Entry<K, V> {
    constructor(null_: Map<Object, Object>)
    constructor(null_: Map<Object, Object>, arg1: number)
    // private index: number;
    readonly key: K;
    getKey(): K;
    readonly value: V;
    getValue(): V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left<K extends unknown>(): K;
    left<K extends unknown, V extends unknown>(arg0: K): Pair<K, V>;
    right<V extends unknown>(): V;
    right<K extends unknown, V extends unknown>(arg0: V): ReferenceObjectPair<K, V>;
    setValue<V extends unknown>(arg0: V): V;
    toString(): string;
}