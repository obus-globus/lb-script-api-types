import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractTable } from '../../../../com/google/common/collect/AbstractTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class Tables$TransposeTable<C extends unknown, R extends unknown, V extends unknown> extends AbstractTable<C, R, V> {
    constructor(original: Table<R, C, V>)
    // private original: Table<R, C, V>;
    cellIterator(): Iterator<Table$Cell<C, R, V>>;
    cellSpliterator(): Spliterator<Table$Cell<C, R, V>>;
    clear(): void;
    column(columnKey: R): JavaMap<C, V>;
    columnKeySet(): R[];
    columnMap(): JavaMap<R, JavaMap<C, V>>;
    contains(rowKey: Object, columnKey: Object): boolean;
    containsColumn(columnKey: Object): boolean;
    containsRow(rowKey: Object): boolean;
    containsValue(value: Object): boolean;
    get(rowKey: Object, columnKey: Object): V;
    put(rowKey: C, columnKey: R, value: V): V;
    putAll(table: Table<C, R, V>): void;
    remove(rowKey: Object, columnKey: Object): V;
    row(rowKey: C): JavaMap<R, V>;
    rowKeySet(): C[];
    rowMap(): JavaMap<C, JavaMap<R, V>>;
    size(): number;
    values(): V[];
}