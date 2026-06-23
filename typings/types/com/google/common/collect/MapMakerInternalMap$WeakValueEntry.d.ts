import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapMakerInternalMap$WeakValueEntry<K extends unknown, V extends unknown, E extends MapMakerInternalMap$InternalEntry<K, V, E>> extends MapMakerInternalMap$InternalEntry<K, V, E>, Object{
    getValueReference(): MapMakerInternalMap$WeakValueReference<K, V, E>;
}