import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HashIterator extends Object implements TruffleObject {
    private constructor(entriesIterator: Object, index: number)
    // private entriesIterator: Object;
    // private index: number;
    getIteratorNextElement(iterators: InteropLibrary, arrays: InteropLibrary): Object;
    hasIteratorNextElement(iterators: InteropLibrary): boolean;
    isIterator(): boolean;
}