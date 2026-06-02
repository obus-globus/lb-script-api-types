import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RowSortedTable<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Table<R, C, V>, Object{
    rowKeySet(): R[];
    rowMap(): Map<R, Map<C, V>>;
}