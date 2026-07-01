import type { MapMakerInternalMap$AbstractStrongKeyEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$AbstractStrongKeyEntry.d.ts'
import type { MapMakerInternalMap$DummyInternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$DummyInternalEntry.d.ts'
import type { MapMakerInternalMap$StrongValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$StrongValueEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$StrongKeyStrongValueEntry<K extends unknown, V extends unknown> extends MapMakerInternalMap$AbstractStrongKeyEntry<K, V, MapMakerInternalMap$StrongKeyStrongValueEntry<K, V>> implements MapMakerInternalMap$StrongValueEntry<K, V, MapMakerInternalMap$StrongKeyStrongValueEntry<K, V>> {
    constructor(arg0: Object, arg1: number, arg2: MapMakerInternalMap$WeakValueReference<Object, Object, MapMakerInternalMap$DummyInternalEntry>)
    readonly value: V;
    getValue(): V;
}