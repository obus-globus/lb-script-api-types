import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { MapMaker$Dummy } from '../../../../com/google/common/collect/MapMaker$Dummy.d.ts'
import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$Segment } from '../../../../com/google/common/collect/MapMakerInternalMap$Segment.d.ts'
import type { MapMakerInternalMap$WeakKeyDummyValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakKeyDummyValueEntry.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$WeakKeyDummyValueSegment<K extends unknown> extends MapMakerInternalMap$Segment<K, MapMaker$Dummy, MapMakerInternalMap$WeakKeyDummyValueEntry<K>, MapMakerInternalMap$WeakKeyDummyValueSegment<K>> {
    constructor(map: JavaMap<K, MapMaker$Dummy>, initialCapacity: number)
    // private queueForKeys: ReferenceQueue<K>;
    castForTesting(entry: MapMakerInternalMap$InternalEntry<K, MapMaker$Dummy, MapMakerInternalMap$InternalEntry<Object, Object, any>>): MapMakerInternalMap$WeakKeyDummyValueEntry<K>;
    getKeyReferenceQueueForTesting(): ReferenceQueue<K>;
    maybeClearReferenceQueues(): void;
    maybeDrainReferenceQueues(): void;
    self(): MapMakerInternalMap$WeakKeyDummyValueSegment<K>;
}