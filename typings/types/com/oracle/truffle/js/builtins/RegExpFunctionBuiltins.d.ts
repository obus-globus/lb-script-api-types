import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSBuiltinsContainer$SwitchEnum } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer$SwitchEnum.d.ts'
import type { RegExpFunctionBuiltins$RegExpFunction } from '../../../../../com/oracle/truffle/js/builtins/RegExpFunctionBuiltins$RegExpFunction.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RegExpFunctionBuiltins extends JSBuiltinsContainer$SwitchEnum<RegExpFunctionBuiltins$RegExpFunction> {
    static BUILTINS: RegExpFunctionBuiltins;
    static fromEnum<E extends Enum<E> & BuiltinEnum<E>>(paramname: TruffleString, parambuiltinEnum: Class<E>): JSBuiltinsContainer;
    constructor()
}