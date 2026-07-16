import type { StandardRowSortedTable } from '../../../../com/google/common/collect/StandardRowSortedTable.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class TreeBasedTable<R extends unknown, C extends unknown, V extends unknown> extends StandardRowSortedTable<R, C, V> {
    static create<R extends Comparable<Object>, C extends Comparable<Object>, V extends unknown>(): TreeBasedTable<R, C, V>;
    static create<R extends unknown, C extends unknown, V extends unknown>(paramtable: TreeBasedTable<R, C, V>): TreeBasedTable<R, C, V>;
    static create<R extends unknown, C extends unknown, V extends unknown>(paramrowComparator: (param0: Object, param1: Object) => number, paramcolumnComparator: (param0: Object, param1: Object) => number): TreeBasedTable<R, C, V>;
    constructor(rowComparator: (param0: R, param1: R) => number, columnComparator: (param0: C, param1: C) => number)
    // private columnComparator: (param0: C, param1: C) => number;
    columnComparator(): (param0: C, param1: C) => number;
    createColumnKeyIterator(): Iterator<C>;
    row(rowKey: R): Map<C, V>;
    rowComparator(): (param0: R, param1: R) => number;
}