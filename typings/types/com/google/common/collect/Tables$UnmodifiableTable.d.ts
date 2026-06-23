import type { ForwardingTable } from '../../../../com/google/common/collect/ForwardingTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Tables$UnmodifiableTable<R extends unknown, C extends unknown, V extends unknown> extends ForwardingTable<R, C, V> implements Serializable {
    constructor(delegate: Table<R, C, V>)
    // private delegate: Table<R, C, V>;
    cellSet(): Table$Cell<R, C, V>[];
    clear(): void;
    column(columnKey: C): Map<R, V>;
    columnKeySet(): C[];
    columnMap(): Map<C, Map<R, V>>;
    delegate(): Table<R, C, V>;
    put(rowKey: R, columnKey: C, value: V): V;
    putAll(table: Table<R, C, V>): void;
    remove(rowKey: Object, columnKey: Object): V;
    row(rowKey: R): Map<C, V>;
    rowKeySet(): R[];
    rowMap(): Map<R, Map<C, V>>;
    values(): V[];
}