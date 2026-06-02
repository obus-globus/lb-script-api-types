import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { Synchronized$SynchronizedObject } from '../../../../com/google/common/collect/Synchronized$SynchronizedObject.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Synchronized$SynchronizedMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Synchronized$SynchronizedObject implements Multimap<K, V> {
    constructor(delegate: Multimap<K, V>, mutex: Object)
    // private asMap: Map<K, E[]>;
    // private entries: E[];
    // private keySet: K[];
    // private keys: K[];
    // private valuesCollection: E[];
    asMap(): Map<K, E[]>;
    clear(): void;
    containsEntry(key: Object, value: Object): boolean;
    containsKey(key: Object): boolean;
    containsValue(value: Object): boolean;
    delegate(): Multimap<K, V>;
    entries(): E[];
    equals(o: Object | null): boolean;
    forEach(action: (param0: K, param1: V) => void): void;
    forEach(action: (param0: K, param1: V) => void): void;
    get(key: K): E[];
    hashCode(): number;
    isEmpty(): boolean;
    keySet(): K[];
    keys(): K[];
    put(key: K, value: V): boolean;
    putAll(key: K, values: V[]): boolean;
    putAll(multimap: Multimap<K, V>): boolean;
    remove(key: Object, value: Object): boolean;
    removeAll(key: Object): E[];
    replaceValues(key: K, values: V[]): E[];
    size(): number;
    values(): E[];
}