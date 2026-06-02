import type { TriState } from '../../../../../../com/oracle/truffle/api/utilities/TriState.d.ts'
import type { AbstractInspectorArray } from '../../../../../../com/oracle/truffle/tools/chromeinspector/objects/AbstractInspectorArray.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JavaTruffleArray extends AbstractInspectorArray {
    constructor(array: Object[])
    // private array: Object[];
    getArraySize(): number;
    identityHashCode(): number;
    isIdenticalOrUndefined(other: Object): TriState;
    readArrayElement(index: number): Object;
}