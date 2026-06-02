import type { MapMakerInternalMap$AbstractStrongKeyEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$AbstractStrongKeyEntry.d.ts'
import type { MapMakerInternalMap$StrongValueEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$StrongValueEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapMakerInternalMap$StrongKeyStrongValueEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends MapMakerInternalMap$AbstractStrongKeyEntry<K, V, MapMakerInternalMap$StrongKeyStrongValueEntry<K, V>> implements MapMakerInternalMap$StrongValueEntry<K, V, MapMakerInternalMap$StrongKeyStrongValueEntry<K, V>> {
    private constructor(key: K, hash: number)
    readonly value: V;
    getValue(): V;
}