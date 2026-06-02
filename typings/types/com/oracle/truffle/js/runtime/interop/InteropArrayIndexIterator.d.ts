import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InteropArrayIndexIterator extends Object implements TruffleObject {
    static create(paramarray: Object): InteropArrayIndexIterator;
    private constructor(array: Object)
    // private array: Object;
    // private cursor: number;
    getIteratorNextElement(interop: InteropLibrary): Object;
    hasIteratorNextElement(interop: InteropLibrary): boolean;
    isIterator(): boolean;
}