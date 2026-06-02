import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { JSHashMap$Cursor } from '../../../../../../com/oracle/truffle/js/runtime/util/JSHashMap$Cursor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSMapObject$EntriesIterator extends Object implements TruffleObject {
    private constructor(cursor: JSHashMap$Cursor)
    // private cursor: JSHashMap$Cursor;
    // private hasNext: boolean;
    getIteratorNextElement(): Object;
    hasIteratorNextElement(): boolean;
    isIterator(): boolean;
}