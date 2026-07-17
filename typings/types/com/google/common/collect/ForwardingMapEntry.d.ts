import type { ForwardingObject } from '../../../../com/google/common/collect/ForwardingObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class ForwardingMapEntry<K extends unknown, V extends unknown> extends ForwardingObject implements Map$Entry<K, V> {
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