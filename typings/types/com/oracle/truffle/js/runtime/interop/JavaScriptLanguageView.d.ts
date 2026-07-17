import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JavaScriptLanguageView extends Object implements TruffleObject {
    static create(paramdelegate: Object): JavaScriptLanguageView;
    private constructor(delegate: Object)
    // private delegate: Object;
    getLanguageId(): string;
    getMetaObject(delegateLibrary: InteropLibrary): Object;
    hasLanguageId(): boolean;
    hasMetaObject(delegateLibrary: InteropLibrary): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
}