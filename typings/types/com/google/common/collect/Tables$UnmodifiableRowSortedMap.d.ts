import type { RowSortedTable } from '../../../../com/google/common/collect/RowSortedTable.d.ts'
import type { Tables$UnmodifiableTable } from '../../../../com/google/common/collect/Tables$UnmodifiableTable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Tables$UnmodifiableRowSortedMap<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Tables$UnmodifiableTable<R, C, V> implements RowSortedTable<R, C, V> {
    constructor(delegate: RowSortedTable<R, C, V>)
    delegate(): RowSortedTable<R, C, V>;
    rowKeySet(): R[];
    rowMap(): Map<R, Map<C, V>>;
}