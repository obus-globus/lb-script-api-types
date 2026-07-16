import type { ImmutableTable } from '../../../../com/google/common/collect/ImmutableTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableTable$Builder<R extends unknown, C extends unknown, V extends unknown> extends Object {
    constructor()
    // private cells: Table$Cell<R, C, V>[];
    // private columnComparator: (param0: C, param1: C) => number;
    // private rowComparator: (param0: R, param1: R) => number;
    build(): ImmutableTable<R, C, V>;
    buildOrThrow(): ImmutableTable<R, C, V>;
    combine(other: ImmutableTable$Builder<R, C, V>): ImmutableTable$Builder<R, C, V>;
    orderColumnsBy(columnComparator: (param0: C, param1: C) => number): ImmutableTable$Builder<R, C, V>;
    orderRowsBy(rowComparator: (param0: R, param1: R) => number): ImmutableTable$Builder<R, C, V>;
    put(rowKey: R, columnKey: C, value: V): ImmutableTable$Builder<R, C, V>;
    put(cell: Table$Cell<R, C, V>): ImmutableTable$Builder<R, C, V>;
    putAll(table: Table<R, C, V>): ImmutableTable$Builder<R, C, V>;
}