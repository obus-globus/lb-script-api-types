import type { JSHashMap$Cursor } from '../../../../../../com/oracle/truffle/js/runtime/util/JSHashMap$Cursor.d.ts'
import type { JSHashMap$Node } from '../../../../../../com/oracle/truffle/js/runtime/util/JSHashMap$Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSHashMap$CursorImpl extends Object implements JSHashMap$Cursor {
    constructor(head: JSHashMap$Node)
    // private current: JSHashMap$Node;
    advance(): boolean;
    copy(): JSHashMap$Cursor;
    getKey(): Object;
    getValue(): Object;
    shouldAdvance(): boolean;
    toString(): string;
}