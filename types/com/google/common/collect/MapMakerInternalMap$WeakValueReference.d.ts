import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapMakerInternalMap$WeakValueReference<K extends Object | number | string | boolean, V extends Object | number | string | boolean, E extends MapMakerInternalMap$InternalEntry<K, V, E>> extends Object{
    clear(): void;
    copyFor(queue: ReferenceQueue<V>, entry: E): MapMakerInternalMap$WeakValueReference<K, V, E>;
    get(): V;
    getEntry(): E;
}