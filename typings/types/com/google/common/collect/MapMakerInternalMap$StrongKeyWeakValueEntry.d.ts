import type { MapMakerInternalMap$AbstractStrongKeyEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$AbstractStrongKeyEntry.d.ts'
import type { MapMakerInternalMap$WeakValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$StrongKeyWeakValueEntry<K extends unknown, V extends unknown> extends MapMakerInternalMap$AbstractStrongKeyEntry<K, V, MapMakerInternalMap$StrongKeyWeakValueEntry<K, V>> implements MapMakerInternalMap$WeakValueEntry<K, V, MapMakerInternalMap$StrongKeyWeakValueEntry<K, V>> {
    private constructor(key: K, hash: number)
    readonly valueReference: MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$StrongKeyWeakValueEntry<K, V>>;
    getValue(): V;
    getValueReference(): MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$StrongKeyWeakValueEntry<K, V>>;
}