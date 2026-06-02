import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSTest262 extends Object {
    static ABSTRACT_MODULE_SOURCE: TruffleString;
    static CLASS_NAME: TruffleString;
    static GLOBAL_PROPERTY_NAME: TruffleString;
    static create(paramrealm: JSRealm): JSObject;
    private constructor()
}