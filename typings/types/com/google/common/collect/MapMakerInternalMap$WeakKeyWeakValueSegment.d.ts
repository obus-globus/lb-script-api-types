import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$Segment } from '../../../../com/google/common/collect/MapMakerInternalMap$Segment.d.ts'
import type { MapMakerInternalMap$WeakKeyWeakValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakKeyWeakValueEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$WeakKeyWeakValueSegment<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends MapMakerInternalMap$Segment<K, V, MapMakerInternalMap$WeakKeyWeakValueEntry<K, V>, MapMakerInternalMap$WeakKeyWeakValueSegment<K, V>> {
    constructor(map: Map<K, V>, initialCapacity: number)
    // private queueForKeys: ReferenceQueue<K>;
    // private queueForValues: ReferenceQueue<V>;
    castForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, any>>): MapMakerInternalMap$WeakKeyWeakValueEntry<K, V>;
    getKeyReferenceQueueForTesting(): ReferenceQueue<K>;
    getValueReferenceQueueForTesting(): ReferenceQueue<V>;
    getWeakValueReferenceForTesting(e: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, any>>): MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$WeakKeyWeakValueEntry<K, V>>;
    maybeClearReferenceQueues(): void;
    maybeDrainReferenceQueues(): void;
    newWeakValueReferenceForTesting(e: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, any>>, value: V): MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$WeakKeyWeakValueEntry<K, V>>;
    self(): MapMakerInternalMap$WeakKeyWeakValueSegment<K, V>;
    setWeakValueReferenceForTesting(e: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, any>>, valueReference: MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, any>>>): void;
}