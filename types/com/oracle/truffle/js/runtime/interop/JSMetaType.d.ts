import type { TruffleLanguage } from '../../../../../../com/oracle/truffle/api/TruffleLanguage.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { TruffleObject } from '../../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { JSMetaType$TypeCheck } from '../../../../../../com/oracle/truffle/js/runtime/interop/JSMetaType$TypeCheck.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSMetaType extends Object implements TruffleObject {
    static ARRAY: JSMetaType;
    static BOOLEAN: JSMetaType;
    static DATE: JSMetaType;
    static FUNCTION: JSMetaType;
    static JS_BIGINT: JSMetaType;
    static JS_NULL: JSMetaType;
    static JS_PROXY: JSMetaType;
    static JS_SYMBOL: JSMetaType;
    static JS_UNDEFINED: JSMetaType;
    static NULL: JSMetaType;
    static NUMBER: JSMetaType;
    static OBJECT: JSMetaType;
    static STRING: JSMetaType;
    constructor(typeName: string, isInstance: (param0: InteropLibrary, param1: Object) => kotlin.Boolean)
    // private isInstance: (param0: InteropLibrary, param1: Object) => kotlin.Boolean;
    readonly typeName: string;
    getLanguage(): Class<TruffleLanguage<Object>>;
    getTypeName(): string;
    hasLanguage(): boolean;
    isInstance(instance: Object, interop: InteropLibrary): boolean;
    isMetaObject(): boolean;
    toDisplayString(allowSideEffects: boolean): Object;
    toString(): string;
}