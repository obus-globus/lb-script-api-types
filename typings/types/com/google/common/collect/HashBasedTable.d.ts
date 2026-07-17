import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { HashBasedTable$Factory } from '../../../../com/google/common/collect/HashBasedTable$Factory.d.ts'
import type { StandardTable } from '../../../../com/google/common/collect/StandardTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HashBasedTable<R extends unknown, C extends unknown, V extends unknown> extends StandardTable<R, C, V> {
    static create<R extends unknown, C extends unknown, V extends unknown>(): HashBasedTable<R, C, V>;
    static create<R extends unknown, C extends unknown, V extends unknown>(paramtable: Table<R, C, V>): HashBasedTable<R, C, V>;
    static create<R extends unknown, C extends unknown, V extends unknown>(paramexpectedRows: number, paramexpectedCellsPerRow: number): HashBasedTable<R, C, V>;
    private constructor(backingMap: JavaMap<R, JavaMap<C, V>>, factory: HashBasedTable$Factory<C, V>)
}