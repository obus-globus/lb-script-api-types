import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$Segment } from '../../../../com/google/common/collect/MapMakerInternalMap$Segment.d.ts'
import type { MapMakerInternalMap$StrongKeyStrongValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$StrongKeyStrongValueEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$StrongKeyStrongValueSegment<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends MapMakerInternalMap$Segment<K, V, MapMakerInternalMap$StrongKeyStrongValueEntry<K, V>, MapMakerInternalMap$StrongKeyStrongValueSegment<K, V>> {
    constructor(map: Map<K, V>, initialCapacity: number)
    castForTesting(entry: MapMakerInternalMap$InternalEntry<K, V, MapMakerInternalMap$InternalEntry<Object, Object, Object>>): MapMakerInternalMap$StrongKeyStrongValueEntry<K, V>;
    self(): MapMakerInternalMap$StrongKeyStrongValueSegment<K, V>;
}