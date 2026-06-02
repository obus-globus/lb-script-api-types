import type { ForwardingMapEntry } from '../../../../com/google/common/collect/ForwardingMapEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class AbstractBiMap$BiMapEntry extends ForwardingMapEntry<K, V> {
    constructor(null_: AbstractBiMap$BiMapEntry)
    // private delegate: Map$Entry<K, V>;
    delegate(): Map$Entry<K, V>;
    setValue<V extends Object | number | string | boolean>(value: V): V;
}