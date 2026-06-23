import type { Multimap } from '../../../../com/google/common/collect/Multimap.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ListMultimap<K extends unknown, V extends unknown> extends Multimap<K, V>, Object {
    asMap(): Map<K, V[]>;
    forEach(action: (param0: K, param1: V) => void): void;
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
}