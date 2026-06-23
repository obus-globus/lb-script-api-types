import type { MapMakerInternalMap$InternalEntry } from '../../../../com/google/common/collect/MapMakerInternalMap$InternalEntry.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class MapMakerInternalMap$AbstractStrongKeyEntry<K extends unknown, V extends unknown, E extends MapMakerInternalMap$InternalEntry<K, V, E>> extends Object implements MapMakerInternalMap$InternalEntry<K, V, E> {
    constructor(key: K, hash: number)
    readonly hash: number;
    readonly key: K;
    getHash(): number;
    getKey(): K;
    getNext(): E;
}