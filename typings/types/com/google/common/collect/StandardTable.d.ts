import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { AbstractTable } from '../../../../com/google/common/collect/AbstractTable.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class StandardTable<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractTable<R, C, V> implements Serializable {
    constructor(backingMap: Map<R, Map<C, V>>, factory: () => Map<C, V>)
    // private backingMap: Map<R, Map<C, V>>;
    // private columnKeySet: C[];
    // private columnMap: Map<R, C>;
    // private factory: () => Map<C, V>;
    // private rowMap: Map<R, Map<C, V>>;
    cellIterator(): Iterator<Table$Cell<R, C, V>>;
    cellSet(): Table$Cell<R, C, V>[];
    cellSpliterator(): Spliterator<Table$Cell<R, C, V>>;
    clear(): void;
    column(columnKey: C): Map<R, V>;
    columnKeySet(): C[];
    columnMap(): Map<C, Map<R, V>>;
    contains(rowKey: Object, columnKey: Object): boolean;
    containsColumn(columnKey: Object): boolean;
    // private containsMapping(rowKey: Object, columnKey: Object, value: Object): boolean;
    containsRow(rowKey: Object): boolean;
    containsValue(value: Object): boolean;
    createColumnKeyIterator(): Iterator<C>;
    createRowMap(): Map<R, Map<C, V>>;
    get(rowKey: Object, columnKey: Object): V;
    // private getOrCreate(rowKey: R): Map<C, V>;
    isEmpty(): boolean;
    put(rowKey: R, columnKey: C, value: V): V;
    remove(rowKey: Object, columnKey: Object): V;
    // private removeColumn(column: Object): Map<R, V>;
    // private removeMapping(rowKey: Object, columnKey: Object, value: Object): boolean;
    row(rowKey: R): Map<C, V>;
    rowKeySet(): R[];
    rowMap(): Map<R, Map<C, V>>;
    size(): number;
    values(): V[];
}