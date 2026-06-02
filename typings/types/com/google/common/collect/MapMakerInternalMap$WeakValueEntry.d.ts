import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapMakerInternalMap$WeakValueEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean, E extends MapMakerInternalMap$InternalEntry<K, V, E>> extends MapMakerInternalMap$InternalEntry<K, V, E>, Object{
    getValueReference(): MapMakerInternalMap$WeakValueReference<K, V, E>;
}