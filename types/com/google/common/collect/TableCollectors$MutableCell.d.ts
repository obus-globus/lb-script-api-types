import type { Tables$AbstractCell } from '../../../../com/google/common/collect/Tables$AbstractCell.d.ts'
import type { BinaryOperator } from '../../../../java/util/function/BinaryOperator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TableCollectors$MutableCell<R extends Object | number | string | boolean, C extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Tables$AbstractCell<R, C, V> {
    constructor(row: R, column: C, value: V)
    // private column: C;
    // private row: R;
    readonly value: V;
    getColumnKey(): C;
    getRowKey(): R;
    getValue(): V;
    merge(value: V, mergeFunction: (param0: V, param1: Object | null) => unknown): void;
}