import type { ImmutableTable } from '../../../../com/google/common/collect/ImmutableTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { TableCollectors$MutableCell } from '../../../../com/google/common/collect/TableCollectors$MutableCell.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TableCollectors$ImmutableTableCollectorState<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    private constructor()
    // private insertionOrder: TableCollectors$MutableCell<R, C, V>[];
    // private table: Table<R, C, TableCollectors$MutableCell<R, C, V>>;
    combine(other: TableCollectors$ImmutableTableCollectorState<R, C, V>, merger: (param0: V, param1: Object | null) => Object | null): TableCollectors$ImmutableTableCollectorState<R, C, V>;
    put(row: R, column: C, value: V, merger: (param0: V, param1: Object | null) => Object | null): void;
    toTable(): ImmutableTable<R, C, V>;
}