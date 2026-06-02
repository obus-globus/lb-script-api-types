import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { JavaScriptLanguage } from '../../../../../../com/oracle/truffle/js/lang/JavaScriptLanguage.d.ts'
import type { JSInteropGetIteratorNextNode } from '../../../../../../com/oracle/truffle/js/nodes/interop/JSInteropGetIteratorNextNode.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { IteratorRecord } from '../../../../../../com/oracle/truffle/js/runtime/objects/IteratorRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSIteratorWrapper extends Object implements TruffleObject {
    static create(paramiterator: IteratorRecord): JSIteratorWrapper;
    private constructor(iterator: IteratorRecord)
    // private iterator: Object;
    // private iteratorRecord: IteratorRecord;
    // private next: Object;
    getIteratorNextElement(self: InteropLibrary, iteratorNextNode: JSInteropGetIteratorNextNode): Object;
    hasIteratorNextElement(self: InteropLibrary, iteratorNextNode: JSInteropGetIteratorNextNode): boolean;
    isIterator(): boolean;
    // private next(language: JavaScriptLanguage, realm: JSRealm, iteratorNextNode: JSInteropGetIteratorNextNode): Object;
}