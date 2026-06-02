import type { MapMaker$Dummy } from '../../../../com/google/common/collect/MapMaker$Dummy.d.ts'
import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$Segment } from '../../../../com/google/common/collect/MapMakerInternalMap$Segment.d.ts'
import type { MapMakerInternalMap$StrongKeyDummyValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$StrongKeyDummyValueEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$StrongKeyDummyValueSegment<K extends Object | number | string | boolean> extends MapMakerInternalMap$Segment<K, MapMaker$Dummy, MapMakerInternalMap$StrongKeyDummyValueEntry<K>, MapMakerInternalMap$StrongKeyDummyValueSegment<K>> {
    constructor(map: Map<K, MapMaker$Dummy>, initialCapacity: number)
    castForTesting(entry: MapMakerInternalMap$InternalEntry<K, MapMaker$Dummy, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): MapMakerInternalMap$StrongKeyDummyValueEntry<K>;
    self(): MapMakerInternalMap$StrongKeyDummyValueSegment<K>;
}