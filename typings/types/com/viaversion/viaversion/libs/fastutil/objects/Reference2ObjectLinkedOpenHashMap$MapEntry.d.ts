import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Reference2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Reference2ObjectMap$Entry.d.ts'
import type { ReferenceObjectPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/ReferenceObjectPair.d.ts'
import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class Reference2ObjectLinkedOpenHashMap$MapEntry extends Object implements Reference2ObjectMap$Entry<K, V>, ReferenceObjectPair<K, V>, Map$Entry<K, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    static of(paramarg0: Object | null, paramarg1: Object | null): ReferenceObjectPair<Object, Object>;
    constructor(null_: Reference2ObjectLinkedOpenHashMap$MapEntry)
    constructor(null_: Reference2ObjectLinkedOpenHashMap$MapEntry, arg1: number)
    // private index: number;
    readonly key: K;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left<K extends Object | number | string | boolean>(): K;
    left<K extends Object | number | string | boolean>(arg0: K): Pair<K, V>;
    right<V extends Object | number | string | boolean>(): V;
    right<V extends Object | number | string | boolean>(arg0: V): ReferenceObjectPair<K, V>;
    setValue<V extends Object | number | string | boolean>(arg0: V): V;
    toString(): string;
}