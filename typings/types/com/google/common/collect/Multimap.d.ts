import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export interface Multimap<K extends unknown, V extends unknown> extends Object {
    asMap(): Map<K, V[]>;
    clear(): void;
    containsEntry(key: Object, value: Object): boolean;
    containsKey(key: Object): boolean;
    containsValue(value: Object): boolean;
    entries(): Map$Entry<K, V>[];
    forEach(action: (param0: K, param1: V) => void): void;
    get(key: K): V[];
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