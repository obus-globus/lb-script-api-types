import type { ForwardingMapEntry } from '../../../../com/google/common/collect/ForwardingMapEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class AbstractBiMap$BiMapEntry extends ForwardingMapEntry<K, V> {
    constructor(null_: AbstractBiMap$BiMapEntry)
    // private delegate: Map$Entry<K, V>;
    delegate<K extends unknown, V extends unknown>(): Map$Entry<K, V>;
    setValue<V extends unknown>(value: V): V;
}