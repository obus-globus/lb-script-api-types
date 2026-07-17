import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { TruffleString$FromLongNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromLongNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InteropArrayIndexIterator extends Object implements TruffleObject {
    static create(paramarray: Object, paramconvertToString: boolean): InteropArrayIndexIterator;
    private constructor(array: Object, convertToString: boolean)
    // private array: Object;
    // private convertToString: boolean;
    // private cursor: number;
    getIteratorNextElement(stringFromLong: TruffleString$FromLongNode, interop: InteropLibrary): Object;
    hasIteratorNextElement(interop: InteropLibrary): boolean;
    isIterator(): boolean;
}