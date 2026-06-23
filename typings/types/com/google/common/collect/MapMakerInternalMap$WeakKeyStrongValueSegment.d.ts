import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$Segment } from '../../../../com/google/common/collect/MapMakerInternalMap$Segment.d.ts'
import type { MapMakerInternalMap$WeakKeyStrongValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakKeyStrongValueEntry.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$WeakKeyStrongValueSegment<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends MapMakerInternalMap$Segment<K, V, MapMakerInternalMap$WeakKeyStrongValueEntry<K, V>, MapMakerInternalMap$WeakKeyStrongValueSegment<K, V>> {
    constructor(map: Map<K, V>, initialCapacity: number)
    // private queueForKeys: ReferenceQueue<K>;
    castForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, any>>): MapMakerInternalMap$WeakKeyStrongValueEntry<K, V>;
    getKeyReferenceQueueForTesting(): ReferenceQueue<K>;
    maybeClearReferenceQueues(): void;
    maybeDrainReferenceQueues(): void;
    self(): MapMakerInternalMap$WeakKeyStrongValueSegment<K, V>;
}