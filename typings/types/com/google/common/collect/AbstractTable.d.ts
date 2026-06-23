import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class AbstractTable<R extends unknown, C extends unknown, V extends unknown> extends Object implements Table<R, C, V> {
    constructor()
    // private cellSet: Table$Cell<R, C, V>[];
    // private values: V[];
    cellIterator(): Iterator<Table$Cell<R, C, V>>;
    cellSet(): Table$Cell<R, C, V>[];
    cellSpliterator(): Spliterator<Table$Cell<R, C, V>>;
    clear(): void;
    columnKeySet(): C[];
    contains(rowKey: Object, columnKey: Object): boolean;
    containsColumn(columnKey: Object): boolean;
    containsRow(rowKey: Object): boolean;
    containsValue(value: Object): boolean;
    createCellSet(): Table$Cell<R, C, V>[];
    createValues(): V[];
    equals(obj: Object | null): boolean;
    get(rowKey: Object, columnKey: Object): V;
    hashCode(): number;
    isEmpty(): boolean;
    put(rowKey: R, columnKey: C, value: V): V;
    putAll(table: Table<R, C, V>): void;
    remove(rowKey: Object, columnKey: Object): V;
    rowKeySet(): R[];
    toString(): string;
    values(): V[];
    valuesIterator(): Iterator<V>;
    valuesSpliterator(): Spliterator<V>;
}