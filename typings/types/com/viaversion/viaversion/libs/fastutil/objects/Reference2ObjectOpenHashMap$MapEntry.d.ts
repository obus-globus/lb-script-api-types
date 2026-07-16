import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { ReferenceObjectPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ReferenceObjectPair.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../../../java/lang/Comparable.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class Reference2ObjectOpenHashMap$MapEntry extends Object implements Reference2ObjectMap$Entry<K, V>, ReferenceObjectPair<K, V>, Map$Entry<K, V> {
    static comparingByKey<K extends Comparable<Object>, V extends unknown>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByKey<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends Comparable<Object>>(): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static comparingByValue<K extends unknown, V extends unknown>(paramarg0: (param0: Object, param1: Object) => number): (param0: Map$Entry<K, V>, param1: Map$Entry<K, V>) => number;
    static copyOf<K extends unknown, V extends unknown>(paramarg0: Map$Entry<K, V>): Map$Entry<K, V>;
    static of<K extends unknown, V extends unknown>(paramarg0: K, paramarg1: V): ReferenceObjectPair<K, V>;
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