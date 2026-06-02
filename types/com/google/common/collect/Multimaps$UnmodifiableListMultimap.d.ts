import type { ListMultimap } from '../../../../com/google/common/collect/ListMultimap.d.ts'
import type { Multimaps$UnmodifiableMultimap } from '../../../../com/google/common/collect/Multimaps$UnmodifiableMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Multimaps$UnmodifiableListMultimap<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Multimaps$UnmodifiableMultimap<K, V> implements ListMultimap<K, V> {
    constructor(delegate: ListMultimap<K, V>)
    delegate(): ListMultimap<K, V>;
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
}