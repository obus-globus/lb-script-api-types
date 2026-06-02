import type { ForwardingObject } from '../../../../com/google/common/collect/ForwardingObject.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class ForwardingMapEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ForwardingObject implements Map$Entry<K, V> {
    static comparingByKey(): (param0: Object | null) => kotlin.Boolean;
    static comparingByKey(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(): (param0: Object | null) => kotlin.Boolean;
    static comparingByValue(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    static copyOf(paramarg0: Map$Entry<Object, Object>): Map$Entry<Object, Object>;
    constructor()
    readonly key: K;
    readonly value: V;
    delegate(): Map$Entry<K, V>;
    equals(object: Object | null): boolean;
    hashCode(): number;
    setValue(value: V): V;
    standardEquals(object: Object): boolean;
    standardHashCode(): number;
    standardToString(): string;
}