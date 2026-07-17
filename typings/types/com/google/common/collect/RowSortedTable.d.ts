import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RowSortedTable<R extends unknown, C extends unknown, V extends unknown> extends Table<R, C, V>, Object{
    rowKeySet(): R[];
    rowMap(): JavaMap<R, JavaMap<C, V>>;
}