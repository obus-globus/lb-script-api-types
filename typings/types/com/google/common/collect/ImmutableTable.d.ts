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
export abstract class ImmutableTable<R extends unknown, C extends unknown, V extends unknown> extends AbstractTable<R, C, V> implements Serializable {
    static builder<R extends unknown, C extends unknown, V extends unknown>(): ImmutableTable$Builder<R, C, V>;
    static copyOf<R extends unknown, C extends unknown, V extends unknown>(paramtable: Table<R, C, V>): ImmutableTable<R, C, V>;
    static of<R extends unknown, C extends unknown, V extends unknown>(): ImmutableTable<R, C, V>;
    static of<R extends unknown, C extends unknown, V extends unknown>(paramrowKey: R, paramcolumnKey: C, paramvalue: V): ImmutableTable<R, C, V>;
    static toImmutableTable<T extends unknown, R extends unknown, C extends unknown, V extends unknown>(paramrowFunction: (param0: Object) => R, paramcolumnFunction: (param0: Object) => C, paramvalueFunction: (param0: Object) => V): Collector<T, Object, ImmutableTable<R, C, V>>;
    static toImmutableTable<T extends unknown, R extends unknown, C extends unknown, V extends unknown>(paramrowFunction: (param0: Object) => R, paramcolumnFunction: (param0: Object) => C, paramvalueFunction: (param0: Object) => V, parammergeFunction: (param0: V, param1: V) => V): Collector<T, Object, ImmutableTable<R, C, V>>;
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