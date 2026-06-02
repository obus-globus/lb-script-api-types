import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class MapMakerInternalMap$AbstractWeakKeyEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean, E extends MapMakerInternalMap$InternalEntry<K, V, E>> extends WeakReference<K> implements MapMakerInternalMap$InternalEntry<K, V, E> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(queue: ReferenceQueue<K>, key: K, hash: number)
    readonly hash: number;
    getHash(): number;
    getKey(): K;
    getNext(): E;
}