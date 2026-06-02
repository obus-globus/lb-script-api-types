import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$Segment } from '../../../../com/google/common/collect/MapMakerInternalMap$Segment.d.ts'
import type { MapMakerInternalMap$StrongKeyWeakValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$StrongKeyWeakValueEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$StrongKeyWeakValueSegment<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends MapMakerInternalMap$Segment<K, V, MapMakerInternalMap$StrongKeyWeakValueEntry<K, V>, MapMakerInternalMap$StrongKeyWeakValueSegment<K, V>> {
    constructor(map: Map<K, V>, initialCapacity: number)
    // private queueForValues: ReferenceQueue<V>;
    castForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): MapMakerInternalMap$StrongKeyWeakValueEntry<K, V>;
    getValueReferenceQueueForTesting(): ReferenceQueue<V>;
    getWeakValueReferenceForTesting(e: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$StrongKeyWeakValueEntry<K, V>>;
    maybeClearReferenceQueues(): void;
    maybeDrainReferenceQueues(): void;
    newWeakValueReferenceForTesting(e: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>, value: V): MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$StrongKeyWeakValueEntry<K, V>>;
    self(): MapMakerInternalMap$StrongKeyWeakValueSegment<K, V>;
    setWeakValueReferenceForTesting(e: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>, valueReference: MapMakerInternalMap$WeakValueReference<K, V, MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>>): void;
}