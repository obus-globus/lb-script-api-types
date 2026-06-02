import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmutableTable$SerializedForm extends Object implements Serializable {
    private constructor(rowKeys: Object[], columnKeys: Object[], cellValues: Object[], cellRowIndices: number[], cellColumnIndices: number[])
    // private cellColumnIndices: number[];
    // private cellRowIndices: number[];
    // private cellValues: Object[];
    // private columnKeys: Object[];
    // private rowKeys: Object[];
    readResolve(): Object;
}