import type { LocalCache$HashIterator } from '../../../../com/google/common/cache/LocalCache$HashIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class LocalCache$EntryIterator extends LocalCache$HashIterator<Object> {
    constructor(null_: LocalCache$EntryIterator)
    next<K extends unknown, V extends unknown>(): Map$Entry<K, V>;
}