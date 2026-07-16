import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSBuiltinsContainer$Lambda } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer$Lambda.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class ProxyFunctionBuiltins extends JSBuiltinsContainer$Lambda {
    static BUILTINS: JSBuiltinsContainer;
    static fromEnum<E extends Enum<E> & BuiltinEnum<E>>(paramname: TruffleString, parambuiltinEnum: Class<E>): JSBuiltinsContainer;
    constructor()
}