import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class InteropMemberIterator extends Object implements TruffleObject {
    static create(paramvalues: boolean, paramiteratedObject: Object, paramkeysObject: Object, paramkeysSize: number): InteropMemberIterator;
    private constructor(values: boolean, iteratedObject: Object, keysObject: Object, keysSize: number)
    // private cursor: number;
    // private iteratedObject: Object;
    // private keysObject: Object;
    // private keysSize: number;
    // private values: boolean;
    getIteratorNextElement(objInterop: InteropLibrary, keysInterop: InteropLibrary): Object;
    hasIteratorNextElement(): boolean;
    isIterator(): boolean;
}