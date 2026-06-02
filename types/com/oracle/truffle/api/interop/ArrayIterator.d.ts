import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ArrayIterator extends Object implements TruffleObject {
    constructor(array: Object)
    // private array: Object;
    // private currentItemIndex: number;
    getIteratorNextElement(arrays: InteropLibrary): Object;
    hasIteratorNextElement(arrays: InteropLibrary): boolean;
    isIterator(): boolean;
}