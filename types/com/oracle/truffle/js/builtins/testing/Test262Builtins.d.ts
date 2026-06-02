import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSBuiltinsContainer } from '../../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSBuiltinsContainer$SwitchEnum } from '../../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer$SwitchEnum.d.ts'
import type { Test262Builtins$Test262 } from '../../../../../../com/oracle/truffle/js/builtins/testing/Test262Builtins$Test262.d.ts'
import type { JSBuiltin } from '../../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Test262Builtins extends JSBuiltinsContainer$SwitchEnum<Test262Builtins$Test262> {
    static BUILTINS: JSBuiltinsContainer;
    static fromEnum(paramname: TruffleString, parambuiltinEnum: Class<Object>): JSBuiltinsContainer;
    constructor()
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean, builtinEnum: Test262Builtins$Test262): Object;
}