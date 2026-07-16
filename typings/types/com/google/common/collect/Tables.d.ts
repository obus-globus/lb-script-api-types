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
    static immutableCell(paramrowKey: Object | null, paramcolumnKey: Object | null, paramvalue: Object | null): Table$Cell<Object, Object, Object>;
    static newCustomTable(parambackingMap: Map<Object | null, Map<Object | null, Object | null>>, paramfactory: () => Map<Object | null, Object | null>): Table<Object, Object, Object>;
    static synchronizedTable(paramtable: Table<Object, Object, Object>): Table<Object, Object, Object>;
    static toTable(paramrowFunction: (param0: Object) => Object | null, paramcolumnFunction: (param0: Object) => Object | null, paramvalueFunction: (param0: Object) => Object | null, parammergeFunction: (param0: Object | null, param1: Object | null) => Object | null, paramtableSupplier: () => Object | null): Collector<Object, Object, Object>;
    static toTable(paramrowFunction: (param0: Object) => Object | null, paramcolumnFunction: (param0: Object) => Object | null, paramvalueFunction: (param0: Object) => Object | null, paramtableSupplier: () => Object | null): Collector<Object, Object, Object>;
    static transformValues(paramfromTable: Table<Object, Object, Object>, paramfunction: (param0: Object) => Object | null): Table<Object, Object, Object>;
    static transpose(paramtable: Table<Object, Object, Object>): Table<Object, Object, Object>;
    static unmodifiableRowSortedTable(paramtable: RowSortedTable<Object, Object, Object>): RowSortedTable<Object, Object, Object>;
    static unmodifiableTable(paramtable: Table<Object, Object, Object>): Table<Object, Object, Object>;
    private constructor()
}