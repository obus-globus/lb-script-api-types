import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class StandardTable$CellIterator extends Object implements Iterator<Table$Cell<R, C, V>> {
    private constructor(null_: StandardTable$CellIterator)
    // private columnIterator: Iterator<Map$Entry<C, V>>;
    // private rowEntry: Map$Entry<R, Map<C, V>>;
    // private rowIterator: Iterator<Map$Entry<R, Map<C, V>>>;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): Table$Cell<R, C, V>;
    remove(): void;
}