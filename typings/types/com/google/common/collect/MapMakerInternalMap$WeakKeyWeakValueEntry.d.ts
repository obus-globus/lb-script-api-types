import type { MapMakerInternalMap$AbstractWeakKeyEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$AbstractWeakKeyEntry.d.ts'
import type { MapMakerInternalMap$WeakValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$WeakKeyWeakValueEntry<K extends unknown, V extends unknown> extends MapMakerInternalMap$AbstractWeakKeyEntry<K, V, MapMakerInternalMap$WeakKeyWeakValueEntry<K, V>> implements MapMakerInternalMap$WeakValueEntry<K, V, MapMakerInternalMap$WeakKeyWeakValueEntry<K, V>> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(queue: ReferenceQueue<K>, key: K, hash: number)
    readonly valueReference: MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$WeakKeyWeakValueEntry<K, V>>;
    getValue(): V;
    getValueReference(): MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$WeakKeyWeakValueEntry<K, V>>;
}