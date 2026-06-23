import type { Tables$AbstractCell } from '../../../../com/google/common/collect/Tables$AbstractCell.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Tables$ImmutableCell<R extends unknown, C extends unknown, V extends unknown> extends Tables$AbstractCell<R, C, V> implements Serializable {
    constructor(rowKey: R, columnKey: C, value: V)
    readonly columnKey: C;
    readonly rowKey: R;
    readonly value: V;
    getColumnKey(): C;
    getRowKey(): R;
    getValue(): V;
}