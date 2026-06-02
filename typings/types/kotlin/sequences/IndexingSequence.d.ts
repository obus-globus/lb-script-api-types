import type { Object } from '../../java/lang/Object.d.ts'
import type { IndexedValue } from '../../kotlin/collections/IndexedValue.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
import type { Sequence } from '../../kotlin/sequences/Sequence.d.ts'
export class IndexingSequence<T extends Object | number | string | boolean> extends Object implements Sequence<IndexedValue<T>> {
    constructor(sequence: Sequence<T>)
    // private sequence: Sequence<T>;
    iterator(): Iterator<IndexedValue<T>>;
}