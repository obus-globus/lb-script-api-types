import type { ForwardingMultimap } from '../../../../com/google/common/collect/ForwardingMultimap.d.ts'
import type { ListMultimap } from '../../../../com/google/common/collect/ListMultimap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingListMultimap<K extends unknown, V extends unknown> extends ForwardingMultimap<K, V> implements ListMultimap<K, V> {
    constructor()
    delegate(): ListMultimap<K, V>;
    get(key: K): V[];
    removeAll(key: Object): V[];
    replaceValues(key: K, values: V[]): V[];
}