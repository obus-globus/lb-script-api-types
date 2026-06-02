import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$DummyInternalEntry extends Object implements MapMakerInternalMap$InternalEntry<Object, Object, MapMakerInternalMap$DummyInternalEntry> {
    private constructor()
    getHash(): number;
    getKey(): Object;
    getNext(): MapMakerInternalMap$DummyInternalEntry;
    getValue(): Object;
}