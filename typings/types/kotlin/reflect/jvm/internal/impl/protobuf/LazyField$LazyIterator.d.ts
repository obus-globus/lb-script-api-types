import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class LazyField$LazyIterator<K extends Object | number | string | boolean> extends Object implements Iterator<Map$Entry<K, Object>> {
    constructor(arg0: Iterator<Map$Entry<K, Object>>)
    // private iterator: Iterator<Map$Entry<K, Object>>;
    forEachRemaining(arg0: (param0: Map$Entry<K, Object>) => void): void;
    hasNext(): boolean;
    next(): Map$Entry<K, Object>;
    remove(): void;
}