import type { TriState } from '../../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { AbstractInspectorArray } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/AbstractInspectorArray.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSONTruffleArray extends AbstractInspectorArray {
    constructor(json: Object[])
    // private json: Object[];
    getArraySize(): number;
    identityHashCode(): number;
    isArrayElementModifiable(index: number): boolean;
    isIdenticalOrUndefined(other: Object): TriState;
    readArrayElement(index: number): Object;
    writeArrayElement(index: number, value: Object): void;
}