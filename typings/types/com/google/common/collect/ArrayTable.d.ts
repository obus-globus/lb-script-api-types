import type { AbstractTable } from '../../../../com/google/common/collect/AbstractTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class ArrayTable<R extends unknown, C extends unknown, V extends unknown> extends AbstractTable<R, C, V> implements Table<R, C, V>, Serializable {
    static create<R extends unknown, C extends unknown, V extends unknown>(paramtable: Table<R, C, V>): ArrayTable<R, C, V>;
    static create<R extends unknown, C extends unknown, V extends unknown>(paramrowKeys: R[], paramcolumnKeys: C[]): ArrayTable<R, C, V>;
    private constructor(table: ArrayTable<R, C, V>)
    private constructor(table: Table<R, C, V>)
    private constructor(rowKeys: R[], columnKeys: C[])
    // private array: V[][];
    // private columnKeyToIndex: Map<C, number>;
    // private columnList: C[];
    // private columnMap: Map<R, C>;
    // private rowKeyToIndex: Map<R, number>;
    // private rowList: R[];
    // private rowMap: Map<R, C>;
    at(rowIndex: number, columnIndex: number): V;
    cellIterator(): Iterator<Table$Cell<R, C, V>>;
    cellSet(): Table$Cell<R, C, V>[];
    cellSpliterator(): Spliterator<Table$Cell<R, C, V>>;
    clear(): void;
    column(columnKey: C): Map<R, V>;
    columnKeyList(): C[];
    columnKeySet(): C[];
    columnMap(): Map<C, Map<R, V>>;
    contains(rowKey: Object, columnKey: Object): boolean;
    containsColumn(columnKey: Object): boolean;
    containsRow(rowKey: Object): boolean;
    containsValue(value: Object): boolean;
    erase(rowKey: Object, columnKey: Object): V;
    eraseAll(): void;
    get(rowKey: Object, columnKey: Object): V;
    // private getCell(index: number): Table$Cell<R, C, V>;
    // private getValue(index: number): V;
    isEmpty(): boolean;
    put(rowKey: R, columnKey: C, value: V): V;
    putAll(table: Table<R, C, V>): void;
    remove(rowKey: Object, columnKey: Object): V;
    row(rowKey: R): Map<C, V>;
    rowKeyList(): R[];
    rowKeySet(): R[];
    rowMap(): Map<R, Map<C, V>>;
    set(rowIndex: number, columnIndex: number, value: V): V;
    size(): number;
    toArray(valueClass: Class<V>): V[][];
    values(): V[];
    valuesIterator(): Iterator<V>;
    valuesSpliterator(): Spliterator<V>;
}