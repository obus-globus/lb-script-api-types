import type { AbstractIterator } from '../../../../com/google/common/collect/AbstractIterator.d.ts'
import type { StandardTable } from '../../../../com/google/common/collect/StandardTable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class StandardTable$ColumnKeyIterator extends AbstractIterator<C> {
    private constructor(null_: StandardTable<Object, Object, Object>)
    // private entryIterator: Iterator<Map$Entry<C, V>>;
    // private mapIterator: Iterator<Map<C, V>>;
    // private seen: Map<C, V>;
    computeNext<C extends unknown>(): C;
}