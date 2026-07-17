import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Function } from '../../../../com/google/common/base/Function.d.ts'
import type { Supplier } from '../../../../com/google/common/base/Supplier.d.ts'
import type { RowSortedTable } from '../../../../com/google/common/collect/RowSortedTable.d.ts'
import type { Table } from '../../../../com/google/common/collect/Table.d.ts'
import type { Table$Cell } from '../../../../com/google/common/collect/Table$Cell.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { Function as Function_2 } from '../../../../java/util/function/Function.d.ts'
import type { Supplier as Supplier_2 } from '../../../../java/util/function/Supplier.d.ts'
import type { Collector } from '../../../../java/util/stream/Collector.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Tables extends Object {
    static immutableCell<R extends unknown, C extends unknown, V extends unknown>(paramrowKey: R, paramcolumnKey: C, paramvalue: V): Table$Cell<R, C, V>;
    static newCustomTable<R extends unknown, C extends unknown, V extends unknown>(parambackingMap: JavaMap<R, JavaMap<C, V>>, paramfactory: () => JavaMap<C, V>): Table<R, C, V>;
    static synchronizedTable<R extends unknown, C extends unknown, V extends unknown>(paramtable: Table<R, C, V>): Table<R, C, V>;
    static toTable<T extends unknown, R extends unknown, C extends unknown, V extends unknown, I extends Table<R, C, V>>(paramrowFunction: (param0: Object) => R, paramcolumnFunction: (param0: Object) => C, paramvalueFunction: (param0: Object) => V, parammergeFunction: (param0: V, param1: V) => V, paramtableSupplier: () => I): Collector<T, Object, I>;
    static toTable<T extends unknown, R extends unknown, C extends unknown, V extends unknown, I extends Table<R, C, V>>(paramrowFunction: (param0: Object) => R, paramcolumnFunction: (param0: Object) => C, paramvalueFunction: (param0: Object) => V, paramtableSupplier: () => I): Collector<T, Object, I>;
    static transformValues<R extends unknown, C extends unknown, V1 extends unknown, V2 extends unknown>(paramfromTable: Table<R, C, V1>, paramfunction: (param0: Object) => V2): Table<R, C, V2>;
    static transpose<R extends unknown, C extends unknown, V extends unknown>(paramtable: Table<R, C, V>): Table<C, R, V>;
    static unmodifiableRowSortedTable<R extends unknown, C extends unknown, V extends unknown>(paramtable: RowSortedTable<R, C, V>): RowSortedTable<R, C, V>;
    static unmodifiableTable<R extends unknown, C extends unknown, V extends unknown>(paramtable: Table<R, C, V>): Table<R, C, V>;
    private constructor()
}