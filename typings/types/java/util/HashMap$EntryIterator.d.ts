import type { HashMap$HashIterator } from '../../java/util/HashMap$HashIterator.d.ts'
import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../java/util/Map$Entry.d.ts'
export class HashMap$EntryIterator extends HashMap$HashIterator implements Iterator<Map$Entry<K, V>> {
    constructor(null_: Map<Object, Object>)
    forEachRemaining<K extends unknown, V extends unknown>(arg0: (param0: Map$Entry<K, V>) => void): void;
    next<K extends unknown, V extends unknown>(): Map$Entry<K, V>;
}