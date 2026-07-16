import type { ImmutableTable } from '../../../../com/google/common/collect/ImmutableTable.d.ts'
import type { ImmutableTable$Builder } from '../../../../com/google/common/collect/ImmutableTable$Builder.d.ts'
import type { RegularImmutableTable } from '../../../../com/google/common/collect/RegularImmutableTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SparseImmutableTable<R extends unknown, C extends unknown, V extends unknown> extends RegularImmutableTable<R, C, V> {
    static builder<R extends unknown, C extends unknown, V extends unknown>(): ImmutableTable$Builder<R, C, V>;
    static copyOf<R extends unknown, C extends unknown, V extends unknown>(paramtable: Table<R, C, V>): ImmutableTable<R, C, V>;
    static of<R extends unknown, C extends unknown, V extends unknown>(): ImmutableTable<R, C, V>;
    static of<R extends unknown, C extends unknown, V extends unknown>(paramrowKey: R, paramcolumnKey: C, paramvalue: V): ImmutableTable<R, C, V>;
    static toImmutableTable<T extends unknown, R extends unknown, C extends unknown, V extends unknown>(paramrowFunction: (param0: Object) => R, paramcolumnFunction: (param0: Object) => C, paramvalueFunction: (param0: Object) => V): Collector<T, Object, ImmutableTable<R, C, V>>;
    static toImmutableTable<T extends unknown, R extends unknown, C extends unknown, V extends unknown>(paramrowFunction: (param0: Object) => R, paramcolumnFunction: (param0: Object) => C, paramvalueFunction: (param0: Object) => V, parammergeFunction: (param0: V, param1: V) => V): Collector<T, Object, ImmutableTable<R, C, V>>;
    constructor(cellList: Table$Cell<R, C, V>[], rowSpace: R[], columnSpace: C[])
    // private cellColumnInRowIndices: number[];
    // private cellRowIndices: number[];
    // private columnMap: Map<C, Map<R, V>>;
    // private rowMap: Map<R, Map<C, V>>;
    columnMap(): Map<C, Map<R, V>>;
    getCell(index: number): Table$Cell<R, C, V>;
    getValue(index: number): V;
    rowMap(): Map<R, Map<C, V>>;
    size(): number;
    writeReplace(): Object;
}