import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSBuiltinsContainer$SwitchEnum } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer$SwitchEnum.d.ts'
import type { RegExpFunctionBuiltins$RegExpFunction } from '../../../../../com/oracle/truffle/js/builtins/RegExpFunctionBuiltins$RegExpFunction.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class RegExpFunctionBuiltins extends JSBuiltinsContainer$SwitchEnum<RegExpFunctionBuiltins$RegExpFunction> {
    static BUILTINS: RegExpFunctionBuiltins;
    static fromEnum(paramname: TruffleString, parambuiltinEnum: Class<Object>): JSBuiltinsContainer;
    constructor()
}