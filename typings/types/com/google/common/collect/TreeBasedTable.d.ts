import type { StandardRowSortedTable } from '../../../../com/google/common/collect/StandardRowSortedTable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TreeBasedTable<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends StandardRowSortedTable<R, C, V> {
    static create(): TreeBasedTable<Object, Object, Object>;
    static create(paramtable: TreeBasedTable<Object, Object, Object>): TreeBasedTable<Object, Object, Object>;
    static create(paramrowComparator: (param0: Object) => boolean, paramcolumnComparator: (param0: Object) => boolean): TreeBasedTable<Object, Object, Object>;
    constructor(rowComparator: (param0: Object) => boolean, columnComparator: (param0: Object) => boolean)
    // private columnComparator: (param0: Object) => boolean;
    columnComparator(): (param0: Object) => boolean;
    createColumnKeyIterator(): Iterator<C>;
    row(rowKey: R): Map<C, V>;
    rowComparator(): (param0: Object) => boolean;
}