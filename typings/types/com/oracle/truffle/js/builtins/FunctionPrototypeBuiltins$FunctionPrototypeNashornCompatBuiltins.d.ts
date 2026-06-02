import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { FunctionPrototypeBuiltins$FunctionPrototypeNashornCompatBuiltins$FunctionNashornCompat } from '../../../../../com/oracle/truffle/js/builtins/FunctionPrototypeBuiltins$FunctionPrototypeNashornCompatBuiltins$FunctionNashornCompat.d.ts'
import type { JSBuiltinsContainer } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSBuiltinsContainer$SwitchEnum } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer$SwitchEnum.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FunctionPrototypeBuiltins$FunctionPrototypeNashornCompatBuiltins extends JSBuiltinsContainer$SwitchEnum<FunctionPrototypeBuiltins$FunctionPrototypeNashornCompatBuiltins$FunctionNashornCompat> {
    static fromEnum(paramname: TruffleString, parambuiltinEnum: Class<Object>): JSBuiltinsContainer;
    constructor()
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean, builtinEnum: FunctionPrototypeBuiltins$FunctionPrototypeNashornCompatBuiltins$FunctionNashornCompat): Object;
}