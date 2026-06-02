import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EmptyIterator extends Object implements TruffleObject {
    static create(): Object;
    private constructor()
    getIteratorNextElement(): Object;
    hasIteratorNextElement(): boolean;
    isIterator(): boolean;
}