import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Multimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    asMap(): Map<K, E[]>;
    clear(): void;
    containsEntry(key: Object, value: Object): boolean;
    containsKey(key: Object): boolean;
    containsValue(value: Object): boolean;
    entries(): E[];
    forEach(action: (param0: K, param1: V) => void): void;
    get(key: K): E[];
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