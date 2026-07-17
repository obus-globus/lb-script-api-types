import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { AbstractTable } from '../../../../com/google/common/collect/AbstractTable.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class StandardTable<R extends unknown, C extends unknown, V extends unknown> extends AbstractTable<R, C, V> implements Serializable {
    constructor(backingMap: JavaMap<R, JavaMap<C, V>>, factory: () => JavaMap<C, V>)
    // private backingMap: JavaMap<R, JavaMap<C, V>>;
    // private columnKeySet: C[];
    // private columnMap: JavaMap<R, C>;
    // private factory: () => JavaMap<C, V>;
    // private rowMap: JavaMap<R, JavaMap<C, V>>;
    cellIterator(): Iterator<Table$Cell<R, C, V>>;
    cellSet(): Table$Cell<R, C, V>[];
    cellSpliterator(): Spliterator<Table$Cell<R, C, V>>;
    clear(): void;
    column(columnKey: C): JavaMap<R, V>;
    columnKeySet(): C[];
    columnMap(): JavaMap<C, JavaMap<R, V>>;
    contains(rowKey: Object, columnKey: Object): boolean;
    containsColumn(columnKey: Object): boolean;
    // private containsMapping(rowKey: Object, columnKey: Object, value: Object): boolean;
    containsRow(rowKey: Object): boolean;
    containsValue(value: Object): boolean;
    createColumnKeyIterator(): Iterator<C>;
    createRowMap(): JavaMap<R, JavaMap<C, V>>;
    get(rowKey: Object, columnKey: Object): V;
    // private getOrCreate(rowKey: R): JavaMap<C, V>;
    isEmpty(): boolean;
    put(rowKey: R, columnKey: C, value: V): V;
    remove(rowKey: Object, columnKey: Object): V;
    // private removeColumn(column: Object): JavaMap<R, V>;
    // private removeMapping(rowKey: Object, columnKey: Object, value: Object): boolean;
    row(rowKey: R): JavaMap<C, V>;
    rowKeySet(): R[];
    rowMap(): JavaMap<R, JavaMap<C, V>>;
    size(): number;
    values(): V[];
}