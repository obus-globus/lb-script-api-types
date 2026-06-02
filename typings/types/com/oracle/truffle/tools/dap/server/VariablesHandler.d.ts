import type { ExecutionContext } from '../../../../../../com/oracle/truffle/tools/dap/server/ExecutionContext.d.ts'
import type { ThreadsHandler$SuspendedThreadInfo } from '../../../../../../com/oracle/truffle/tools/dap/server/ThreadsHandler$SuspendedThreadInfo.d.ts'
import type { SetVariableArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetVariableArguments.d.ts'
import type { Variable } from '../../../../../../com/oracle/truffle/tools/dap/types/Variable.d.ts'
import type { VariablesArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/VariablesArguments.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class VariablesHandler extends Object {
    static setVariable(paraminfo: ThreadsHandler$SuspendedThreadInfo, paramargs: SetVariableArguments): Variable;
    constructor(context: ExecutionContext)
    // private context: ExecutionContext;
    getVariables(info: ThreadsHandler$SuspendedThreadInfo, args: VariablesArguments): Variable[];
}