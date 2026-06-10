import type { MapMakerInternalMap$HashIterator } from '../../../../com/google/common/collect/MapMakerInternalMap$HashIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class MapMakerInternalMap$EntryIterator extends MapMakerInternalMap$HashIterator<Object> {
    constructor(null_: MapMakerInternalMap$EntryIterator)
    next<K extends Object | number | string | boolean, V extends Object | number | string | boolean>(): Map$Entry<K, V>;
}