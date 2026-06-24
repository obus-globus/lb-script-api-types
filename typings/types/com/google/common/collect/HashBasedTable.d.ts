import type { HashBasedTable$Factory } from '../../../../com/google/common/collect/HashBasedTable$Factory.d.ts'
import type { StandardTable } from '../../../../com/google/common/collect/StandardTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HashBasedTable<R extends unknown, C extends unknown, V extends unknown> extends StandardTable<R, C, V> {
    static create(): HashBasedTable<Object, Object, Object>;
    static create(paramtable: Table<Object, Object, Object>): HashBasedTable<Object, Object, Object>;
    static create(paramexpectedRows: number, paramexpectedCellsPerRow: number): HashBasedTable<Object, Object, Object>;
    private constructor(backingMap: Map<R, Map<C, V>>, factory: HashBasedTable$Factory<C, V>)
}