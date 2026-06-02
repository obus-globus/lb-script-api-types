import type { AbstractTable } from '../../../../com/google/common/collect/AbstractTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Tables$TransposeTable<C extends Object | number | string | boolean, R extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractTable<C, R, V> {
    constructor(original: Table<R, C, V>)
    // private original: Table<R, C, V>;
    cellIterator(): Iterator<Table$Cell<C, R, V>>;
    cellSpliterator(): Spliterator<Table$Cell<C, R, V>>;
    clear(): void;
    column(columnKey: R): Map<C, V>;
    columnKeySet(): R[];
    columnMap(): Map<R, Map<C, V>>;
    contains(rowKey: Object, columnKey: Object): boolean;
    containsColumn(columnKey: Object): boolean;
    containsRow(rowKey: Object): boolean;
    containsValue(value: Object): boolean;
    get(rowKey: Object, columnKey: Object): V;
    put(rowKey: C, columnKey: R, value: V): V;
    putAll(table: Table<C, R, V>): void;
    remove(rowKey: Object, columnKey: Object): V;
    row(rowKey: C): Map<R, V>;
    rowKeySet(): C[];
    rowMap(): Map<C, Map<R, V>>;
    size(): number;
    values(): E[];
}