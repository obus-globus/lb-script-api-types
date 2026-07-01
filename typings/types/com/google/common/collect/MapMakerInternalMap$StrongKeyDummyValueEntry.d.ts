import type { MapMaker$Dummy } from '../../../../com/google/common/collect/MapMaker$Dummy.d.ts'
import type { MapMakerInternalMap$AbstractStrongKeyEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$AbstractStrongKeyEntry.d.ts'
import type { MapMakerInternalMap$DummyInternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$DummyInternalEntry.d.ts'
import type { MapMakerInternalMap$StrongValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$StrongValueEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$StrongKeyDummyValueEntry<K extends unknown> extends MapMakerInternalMap$AbstractStrongKeyEntry<K, MapMaker$Dummy, MapMakerInternalMap$StrongKeyDummyValueEntry<K>> implements MapMakerInternalMap$StrongValueEntry<K, MapMaker$Dummy, MapMakerInternalMap$StrongKeyDummyValueEntry<K>> {
    constructor(arg0: Object, arg1: number, arg2: MapMakerInternalMap$WeakValueReference<Object, Object, MapMakerInternalMap$DummyInternalEntry>)
    getValue(): MapMaker$Dummy;
}