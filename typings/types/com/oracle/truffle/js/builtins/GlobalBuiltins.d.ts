import type { TruffleFile } from '../../../../../com/oracle/truffle/api/TruffleFile.d.ts'
import type { TruffleLanguage$Env } from '../../../../../com/oracle/truffle/api/TruffleLanguage$Env.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { GlobalBuiltins$Global } from '../../../../../com/oracle/truffle/js/builtins/GlobalBuiltins$Global.d.ts'
import type { JSBuiltinsContainer } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer.d.ts'
import type { JSBuiltinsContainer$SwitchEnum } from '../../../../../com/oracle/truffle/js/builtins/JSBuiltinsContainer$SwitchEnum.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { BuiltinEnum } from '../../../../../com/oracle/truffle/js/runtime/builtins/BuiltinEnum.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class GlobalBuiltins extends JSBuiltinsContainer$SwitchEnum<GlobalBuiltins$Global> {
    static GLOBAL_FUNCTIONS: JSBuiltinsContainer;
    static GLOBAL_LOAD: JSBuiltinsContainer;
    static GLOBAL_NASHORN_EXTENSIONS: JSBuiltinsContainer;
    static GLOBAL_PRINT: JSBuiltinsContainer;
    static GLOBAL_SHELL: JSBuiltinsContainer;
    static GLOBAL_WORKER: JSBuiltinsContainer;
    static fromEnum<E extends Enum<E> & BuiltinEnum<E>>(paramname: TruffleString, parambuiltinEnum: Class<E>): JSBuiltinsContainer;
    static resolveRelativeFilePath(parampath: string, paramenv: TruffleLanguage$Env): TruffleFile;
    constructor()
    createNode(context: JSContext, builtin: JSBuiltin, construct: boolean, newTarget: boolean, builtinEnum: GlobalBuiltins$Global): Object;
}