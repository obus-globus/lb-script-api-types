import type { ForwardingMultimap } from '../../../../com/google/common/collect/ForwardingMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Multimaps$UnmodifiableMultimap<K extends unknown, V extends unknown> extends ForwardingMultimap<K, V> implements Serializable {
    constructor(delegate: Multimap<K, V>)
    // private delegate: Multimap<K, V>;
    // private entries: Map$Entry<K, V>[];
    // private keySet: K[];
    // private keys: K[];
    // private map: Map<K, V[]>;
    // private values: V[];
    asMap(): Map<K, V[]>;
    clear(): void;
    delegate(): Multimap<K, V>;
    entries(): Map$Entry<K, V>[];
    forEach(consumer: (param0: K, param1: V) => void): void;
    get(key: K): V[];
    keySet(): K[];
    keys(): K[];
    put(key: K, value: V): boolean;
    putAll(key: K, values: V[]): boolean;
    putAll(multimap: Multimap<K, V>): boolean;
    remove(key: Object, value: Object): boolean;
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
    values(): V[];
}