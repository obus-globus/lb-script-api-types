import type { StandardRowSortedTable } from '../../../../com/google/common/collect/StandardRowSortedTable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TreeBasedTable<R extends unknown, C extends unknown, V extends unknown> extends StandardRowSortedTable<R, C, V> {
    static create(): TreeBasedTable<Object, Object, Object>;
    static create(paramtable: TreeBasedTable<Object, Object, Object>): TreeBasedTable<Object, Object, Object>;
    static create(paramrowComparator: (param0: Object, param1: Object) => number, paramcolumnComparator: (param0: Object, param1: Object) => number): TreeBasedTable<Object, Object, Object>;
    constructor(rowComparator: (param0: R, param1: R) => number, columnComparator: (param0: C, param1: C) => number)
    // private columnComparator: (param0: C, param1: C) => number;
    columnComparator(): (param0: C, param1: C) => number;
    createColumnKeyIterator(): Iterator<C>;
    row(rowKey: R): Map<C, V>;
    rowComparator(): (param0: R, param1: R) => number;
}