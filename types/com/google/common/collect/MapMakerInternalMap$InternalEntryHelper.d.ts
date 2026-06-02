import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { MapMakerInternalMap$Segment } from '../../../../com/google/common/collect/MapMakerInternalMap$Segment.d.ts'
import type { MapMakerInternalMap$Strength } from '../../../../com/google/common/collect/MapMakerInternalMap$Strength.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MapMakerInternalMap$InternalEntryHelper<K extends Object | number | string | boolean, V extends Object | number | string | boolean, E extends MapMakerInternalMap$InternalEntry<K, V, E>, S extends MapMakerInternalMap$Segment<K, V, E, S>> extends Object{
    copy(segment: S, entry: E, newNext: E): E;
    keyStrength(): MapMakerInternalMap$Strength;
    newEntry(segment: S, key: K, hash: number, next: E): E;
    newSegment(map: Map<K, V>, initialCapacity: number): S;
    setValue(segment: S, entry: E, value: V): void;
    valueStrength(): MapMakerInternalMap$Strength;
}