import type { Multimaps$UnmodifiableMultimap } from '../../../../com/google/common/collect/Multimaps$UnmodifiableMultimap.d.ts'
import type { SetMultimap } from '../../../../com/google/common/collect/SetMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class Multimaps$UnmodifiableSetMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Multimaps$UnmodifiableMultimap<K, V> implements SetMultimap<K, V> {
    constructor(delegate: SetMultimap<K, V>)
    delegate(): SetMultimap<K, V>;
    entries(): Map$Entry<K, V>[];
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
}