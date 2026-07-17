import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class PerformanceBuiltins extends Object {
    static BUILTINS: JSBuiltinsContainer;
    static FUNCTION_NAME: TruffleString;
    static OBJECT_NAME: TruffleString;
    static TIME_ORIGIN: TruffleString;
    static TO_STRING_TAG: TruffleString;
    static createPerformanceObject(paramrealm: JSRealm): JSObject;
    constructor()
}