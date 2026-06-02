import type { SetMultimap } from '../../../../com/google/common/collect/SetMultimap.d.ts'
import type { Synchronized$SynchronizedMultimap } from '../../../../com/google/common/collect/Synchronized$SynchronizedMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Synchronized$SynchronizedSetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Synchronized$SynchronizedMultimap<K, V> implements SetMultimap<K, V> {
    constructor(delegate: SetMultimap<K, V>, mutex: Object)
    // private entrySet: Map$Entry<K, V>[];
    delegate(): SetMultimap<K, V>;
    entries(): Map$Entry<K, V>[];
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
}