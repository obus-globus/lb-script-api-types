import type { MapMaker$Dummy } from '../../../../com/google/common/collect/MapMaker$Dummy.d.ts'
import type { MapMakerInternalMap$AbstractWeakKeyEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$AbstractWeakKeyEntry.d.ts'
import type { MapMakerInternalMap$StrongValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$StrongValueEntry.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$WeakKeyDummyValueEntry<K extends unknown> extends MapMakerInternalMap$AbstractWeakKeyEntry<K, MapMaker$Dummy, MapMakerInternalMap$WeakKeyDummyValueEntry<K>> implements MapMakerInternalMap$StrongValueEntry<K, MapMaker$Dummy, MapMakerInternalMap$WeakKeyDummyValueEntry<K>> {
    static reachabilityFence(paramarg0: Object): void;
    private constructor(queue: ReferenceQueue<K>, key: K, hash: number)
    getValue(): MapMaker$Dummy;
}