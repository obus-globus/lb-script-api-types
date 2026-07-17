import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ForwardingObject } from '../../../../com/google/common/collect/ForwardingObject.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export abstract class ForwardingMultimap<K extends unknown, V extends unknown> extends ForwardingObject implements Multimap<K, V> {
    constructor()
    asMap(): JavaMap<K, V[]>;
    clear(): void;
    containsEntry(key: Object, value: Object): boolean;
    containsKey(key: Object): boolean;
    containsValue(value: Object): boolean;
    delegate(): Multimap<K, V>;
    entries(): Map$Entry<K, V>[];
    equals(object: Object | null): boolean;
    forEach(action: (param0: K, param1: V) => void): void;
    get(key: K): V[];
    hashCode(): number;
    isEmpty(): boolean;
    keySet(): K[];
    keys(): K[];
    put(key: K, value: V): boolean;
    putAll(key: K, values: V[]): boolean;
    putAll(multimap: Multimap<K, V>): boolean;
    remove(key: Object, value: Object): boolean;
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    size(): number;
    values(): V[];
}