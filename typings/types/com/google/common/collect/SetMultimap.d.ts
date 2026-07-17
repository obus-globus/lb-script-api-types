import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export interface SetMultimap<K extends unknown, V extends unknown> extends Multimap<K, V>, Object {
    asMap(): JavaMap<K, V[]>;
    entries(): Map$Entry<K, V>[];
    forEach(action: (param0: K, param1: V) => void): void;
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
}