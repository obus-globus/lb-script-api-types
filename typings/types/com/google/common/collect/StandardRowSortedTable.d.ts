import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { RowSortedTable } from '../../../../com/google/common/collect/RowSortedTable.d.ts'
import type { StandardTable } from '../../../../com/google/common/collect/StandardTable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StandardRowSortedTable<R extends unknown, C extends unknown, V extends unknown> extends StandardTable<R, C, V> implements RowSortedTable<R, C, V> {
    constructor(backingMap: Map<R, Map<C, V>>, factory: () => Map<C, V>)
    createRowMap(): Map<R, Map<C, V>>;
    rowKeySet(): R[];
    rowMap(): Map<R, Map<C, V>>;
    // private sortedBackingMap(): Map<R, Map<C, V>>;
}