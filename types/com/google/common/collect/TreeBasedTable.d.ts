import type { StandardRowSortedTable } from '../../../../com/google/common/collect/StandardRowSortedTable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TreeBasedTable<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends StandardRowSortedTable<R, C, V> {
    static create(): TreeBasedTable<Object, Object, Object>;
    static create(paramtable: TreeBasedTable<Object, Object, Object>): TreeBasedTable<Object, Object, Object>;
    static create(paramrowComparator: (param0: Object | null) => kotlin.Boolean, paramcolumnComparator: (param0: Object | null) => kotlin.Boolean): TreeBasedTable<Object, Object, Object>;
    constructor(rowComparator: (param0: R) => kotlin.Boolean, columnComparator: (param0: C) => kotlin.Boolean)
    // private columnComparator: (param0: C) => kotlin.Boolean;
    columnComparator(): (param0: C) => kotlin.Boolean;
    createColumnKeyIterator(): Iterator<C>;
    row(rowKey: R): Map<C, V>;
    rowComparator(): (param0: R) => kotlin.Boolean;
}