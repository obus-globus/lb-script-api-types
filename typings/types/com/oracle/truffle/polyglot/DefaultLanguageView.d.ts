import type { TruffleLanguage } from '../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { InteropLibrary } from '../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultLanguageView<C extends unknown> extends Object implements TruffleObject {
    constructor(language: TruffleLanguage<C>, delegate: Object)
    // private delegate: Object;
    // private language: TruffleLanguage<C>;
    getLanguage(): Class<TruffleLanguage<Object>>;
    hasLanguage(): boolean;
    toDisplayString(allowSideEffects: boolean, delegateLibrary: InteropLibrary): Object;
}