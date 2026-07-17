import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultLanguageView<C extends unknown> extends Object implements TruffleObject {
    constructor(languageId: string, delegate: Object)
    // private delegate: Object;
    // private languageId: string;
    getLanguageId(): string;
    hasLanguageId(): boolean;
    toDisplayString(allowSideEffects: boolean, delegateLibrary: InteropLibrary): Object;
}