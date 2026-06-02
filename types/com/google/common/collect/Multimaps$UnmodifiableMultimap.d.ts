import type { ForwardingMultimap } from '../../../../com/google/common/collect/ForwardingMultimap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multimaps$UnmodifiableMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends ForwardingMultimap<K, V> implements Serializable {
    constructor(delegate: Multimap<K, V>)
    // private delegate: Multimap<K, V>;
    // private entries: E[];
    // private keySet: K[];
    // private keys: K[];
    // private map: Map<K, E[]>;
    // private values: E[];
    asMap(): Map<K, E[]>;
    clear(): void;
    delegate(): Multimap<K, V>;
    entries(): E[];
    forEach(consumer: (param0: K, param1: V) => void): void;
    get(key: K): E[];
    keySet(): K[];
    keys(): K[];
    put(key: K, value: V): boolean;
    putAll(key: K, values: V[]): boolean;
    putAll(multimap: Multimap<K, V>): boolean;
    remove(key: Object, value: Object): boolean;
    removeAll(key: Object): E[];
    replaceValues(key: K, values: V[]): E[];
    values(): E[];
}