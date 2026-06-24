import type { MapMakerInternalMap$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { MapMakerInternalMap$AbstractStrongKeyEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$AbstractStrongKeyEntry.d.ts'
import type { MapMakerInternalMap$StrongValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$StrongValueEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$StrongKeyStrongValueEntry<K extends unknown, V extends unknown> extends MapMakerInternalMap$AbstractStrongKeyEntry<K, V, MapMakerInternalMap$StrongKeyStrongValueEntry<K, V>> implements MapMakerInternalMap$StrongValueEntry<K, V, MapMakerInternalMap$StrongKeyStrongValueEntry<K, V>> {
    private constructor(key: K, hash: number)
    constructor(arg0: Object, arg1: number, arg2: MapMakerInternalMap$1)
    readonly value: V;
    getValue(): V;
}