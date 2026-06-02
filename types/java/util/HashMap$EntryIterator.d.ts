import type { HashMap$HashIterator } from '../../java/util/HashMap$HashIterator.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
export class HashMap$EntryIterator extends HashMap$HashIterator implements Iterator<Map$Entry<K, V>> {
    constructor(null_: HashMap$EntryIterator)
    forEachRemaining(arg0: (param0: T) => void): void;
    next(): Map$Entry<K, V>;
}