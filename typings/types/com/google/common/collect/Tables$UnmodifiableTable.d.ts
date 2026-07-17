import type { JavaMap } from '../../../../JavaMap.d.ts'
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
    column(columnKey: C): JavaMap<R, V>;
    columnKeySet(): C[];
    columnMap(): JavaMap<C, JavaMap<R, V>>;
    delegate(): Table<R, C, V>;
    put(rowKey: R, columnKey: C, value: V): V;
    putAll(table: Table<R, C, V>): void;
    remove(rowKey: Object, columnKey: Object): V;
    row(rowKey: R): JavaMap<C, V>;
    rowKeySet(): R[];
    rowMap(): JavaMap<R, JavaMap<C, V>>;
    values(): V[];
}