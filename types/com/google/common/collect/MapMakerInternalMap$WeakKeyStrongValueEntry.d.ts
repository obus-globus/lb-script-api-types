import type { MapMakerInternalMap$AbstractWeakKeyEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$AbstractWeakKeyEntry.d.ts'
import type { MapMakerInternalMap$StrongValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$StrongValueEntry.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$WeakKeyStrongValueEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends MapMakerInternalMap$AbstractWeakKeyEntry<K, V, MapMakerInternalMap$WeakKeyStrongValueEntry<K, V>> implements MapMakerInternalMap$StrongValueEntry<K, V, MapMakerInternalMap$WeakKeyStrongValueEntry<K, V>> {
    static reachabilityFence(paramarg0: Object): void;
    private constructor(queue: ReferenceQueue<K>, key: K, hash: number)
    readonly value: V;
    getValue(): V;
}