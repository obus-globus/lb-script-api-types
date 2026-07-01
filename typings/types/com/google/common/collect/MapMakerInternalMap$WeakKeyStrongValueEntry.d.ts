import type { MapMakerInternalMap$AbstractWeakKeyEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$AbstractWeakKeyEntry.d.ts'
import type { MapMakerInternalMap$DummyInternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$DummyInternalEntry.d.ts'
import type { MapMakerInternalMap$StrongValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$StrongValueEntry.d.ts'
import type { MapMakerInternalMap$WeakValueReference } from '../../../../com/google/common/collect/MapMakerInternalMap$WeakValueReference.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$WeakKeyStrongValueEntry<K extends unknown, V extends unknown> extends MapMakerInternalMap$AbstractWeakKeyEntry<K, V, MapMakerInternalMap$WeakKeyStrongValueEntry<K, V>> implements MapMakerInternalMap$StrongValueEntry<K, V, MapMakerInternalMap$WeakKeyStrongValueEntry<K, V>> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(arg0: ReferenceQueue<Object>, arg1: Object, arg2: number, arg3: MapMakerInternalMap$WeakValueReference<Object, Object, MapMakerInternalMap$DummyInternalEntry>)
    readonly value: V;
    getValue(): V;
}