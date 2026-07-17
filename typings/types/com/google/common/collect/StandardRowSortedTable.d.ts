import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { RowSortedTable } from '../../../../com/google/common/collect/RowSortedTable.d.ts'
import type { StandardTable } from '../../../../com/google/common/collect/StandardTable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StandardRowSortedTable<R extends unknown, C extends unknown, V extends unknown> extends StandardTable<R, C, V> implements RowSortedTable<R, C, V> {
    constructor(backingMap: JavaMap<R, JavaMap<C, V>>, factory: () => JavaMap<C, V>)
    createRowMap(): JavaMap<R, JavaMap<C, V>>;
    rowKeySet(): R[];
    rowMap(): JavaMap<R, JavaMap<C, V>>;
    // private sortedBackingMap(): JavaMap<R, JavaMap<C, V>>;
}