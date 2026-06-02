import type { AbstractTable } from '../../../../com/google/common/collect/AbstractTable.d.ts'
import type { ImmutableTable$Builder } from '../../../../com/google/common/collect/ImmutableTable$Builder.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { UnmodifiableIterator } from '../../../../com/google/common/collect/UnmodifiableIterator.d.ts'
import type { ObjectInputStream } from '../../../../java/io/ObjectInputStream.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Spliterator } from '../../../../java/util/Spliterator.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class ImmutableTable<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractTable<R, C, V> implements Serializable {
    static builder(): ImmutableTable$Builder<Object, Object, Object>;
    static copyOf(paramtable: Table<Object, Object, Object>): ImmutableTable<Object, Object, Object>;
    static of(): ImmutableTable<Object, Object, Object>;
    static of(paramrowKey: Object | null, paramcolumnKey: Object | null, paramvalue: Object | null): ImmutableTable<Object, Object, Object>;
    static toImmutableTable(paramrowFunction: (param0: Object | null) => Object | null, paramcolumnFunction: (param0: Object | null) => Object | null, paramvalueFunction: (param0: Object | null) => Object | null): Collector<Object, Object, Object>;
    static toImmutableTable(paramrowFunction: (param0: Object | null) => Object | null, paramcolumnFunction: (param0: Object | null) => Object | null, paramvalueFunction: (param0: Object | null) => Object | null, parammergeFunction: (param0: Object | null, param1: Object | null) => unknown): Collector<Object, Object, Object>;
    constructor()
    cellIterator(): UnmodifiableIterator<Table$Cell<R, C, V>>;
    cellSet(): Table$Cell<R, C, V>[];
    cellSpliterator(): Spliterator<Table$Cell<R, C, V>>;
    clear(): void;
    column(columnKey: C): Map<R, V>;
    columnKeySet(): C[];
    columnMap(): Map<C, Map<R, V>>;
    contains(rowKey: Object, columnKey: Object): boolean;
    containsValue(value: Object): boolean;
    createCellSet(): Table$Cell<R, C, V>[];
    createValues(): V[];
    put(rowKey: R, columnKey: C, value: V): V;
    putAll(table: Table<R, C, V>): void;
    // private readObject(stream: ObjectInputStream): void;
    remove(rowKey: Object, columnKey: Object): V;
    row(rowKey: R): Map<C, V>;
    rowKeySet(): R[];
    rowMap(): Map<R, Map<C, V>>;
    values(): V[];
    valuesIterator(): Iterator<V>;
    writeReplace(): Object;
}