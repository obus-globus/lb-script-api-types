import type { ImmutableTable } from '../../../../com/google/common/collect/ImmutableTable.d.ts'
import type { ImmutableTable$Builder } from '../../../../com/google/common/collect/ImmutableTable$Builder.d.ts'
import type { RegularImmutableTable } from '../../../../com/google/common/collect/RegularImmutableTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DenseImmutableTable<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends RegularImmutableTable<R, C, V> {
    static builder(): ImmutableTable$Builder<Object, Object, Object>;
    static copyOf(paramtable: Table<Object, Object, Object>): ImmutableTable<Object, Object, Object>;
    static of(): ImmutableTable<Object, Object, Object>;
    static of(paramrowKey: Object | null, paramcolumnKey: Object | null, paramvalue: Object | null): ImmutableTable<Object, Object, Object>;
    static toImmutableTable(paramrowFunction: (param0: Object | null) => Object | null, paramcolumnFunction: (param0: Object | null) => Object | null, paramvalueFunction: (param0: Object | null) => Object | null): Collector<Object, Object, Object>;
    static toImmutableTable(paramrowFunction: (param0: Object | null) => Object | null, paramcolumnFunction: (param0: Object | null) => Object | null, paramvalueFunction: (param0: Object | null) => Object | null, parammergeFunction: (param0: Object | null, param1: Object | null) => unknown): Collector<Object, Object, Object>;
    constructor(cellList: Table$Cell<R, C, V>[], rowSpace: R[], columnSpace: C[])
    // private cellColumnIndices: number[];
    // private cellRowIndices: number[];
    // private columnCounts: number[];
    // private columnKeyToIndex: Map<C, number>;
    // private columnMap: Map<C, Map<R, V>>;
    // private rowCounts: number[];
    // private rowKeyToIndex: Map<R, number>;
    // private rowMap: Map<R, Map<C, V>>;
    // private values: V[][];
    columnMap(): Map<C, Map<R, V>>;
    get(rowKey: Object, columnKey: Object): V;
    getCell(index: number): Table$Cell<R, C, V>;
    getValue(index: number): V;
    rowMap(): Map<R, Map<C, V>>;
    size(): number;
    writeReplace(): Object;
}