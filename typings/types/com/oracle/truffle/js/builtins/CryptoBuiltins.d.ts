import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { CryptoBuiltins$CryptoPrototype } from '../../../../../com/oracle/truffle/js/builtins/CryptoBuiltins$CryptoPrototype.d.ts'
import type { JSBuiltinsContainer } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSBuiltinsContainer$SwitchEnum } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer$SwitchEnum.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { JSFunctionObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSFunctionObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { SecureRandom } from '../../../../../java/security/SecureRandom.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class CryptoBuiltins extends JSBuiltinsContainer$SwitchEnum<CryptoBuiltins$CryptoPrototype> {
    static FUNCTION_NAME: TruffleString;
    static OBJECT_NAME: TruffleString;
    static createCryptoFunction(paramrealm: JSRealm, paramcryptoPrototype: JSObject): JSFunctionObject;
    static createCryptoObject(paramrealm: JSRealm, paramcryptoPrototype: JSObject): JSObject;
    static createCryptoPrototype(paramrealm: JSRealm): JSObject;
    static ensureCryptoBuiltinsEnabled(): void;
    static fromEnum<E extends Enum<E> & BuiltinEnum<E>>(paramname: TruffleString, parambuiltinEnum: Class<E>): JSBuiltinsContainer;
    static getSecureRandomInstance(): SecureRandom;
    private constructor()
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean, builtinEnum: CryptoBuiltins$CryptoPrototype): Object;
}