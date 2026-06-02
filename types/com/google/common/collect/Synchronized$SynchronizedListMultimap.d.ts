import type { ListMultimap } from '../../../../com/google/common/collect/ListMultimap.d.ts'
import type { Synchronized$SynchronizedMultimap } from '../../../../com/google/common/collect/Synchronized$SynchronizedMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Synchronized$SynchronizedListMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Synchronized$SynchronizedMultimap<K, V> implements ListMultimap<K, V> {
    constructor(delegate: ListMultimap<K, V>, mutex: Object)
    delegate(): ListMultimap<K, V>;
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
}