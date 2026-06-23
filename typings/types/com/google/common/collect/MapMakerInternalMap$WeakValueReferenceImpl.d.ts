import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$WeakValueReferenceImpl<K extends unknown, V extends unknown, E extends MapMakerInternalMap$InternalEntry<K, V, E>> extends WeakReference<V> implements MapMakerInternalMap$WeakValueReference<K, V, E> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(queue: ReferenceQueue<V>, referent: V, entry: E)
    readonly entry: E;
    copyFor(queue: ReferenceQueue<V>, entry: E): MapMakerInternalMap$WeakValueReference<K, V, E>;
    getEntry(): E;
}