import type { ForwardingMapEntry } from '../../../../com/google/common/collect/ForwardingMapEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class MutableTypeToInstanceMap$UnmodifiableEntry<K extends unknown, V extends unknown> extends ForwardingMapEntry<K, V> {
    private constructor(delegate: Map$Entry<K, V>)
    // private delegate: Map$Entry<K, V>;
    delegate(): Map$Entry<K, V>;
    setValue(value: V): V;
}