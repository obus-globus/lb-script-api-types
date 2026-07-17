import type { DebugScope } from '../../../../../../com/oracle/truffle/api/debug/DebugScope.d.ts'
import type { DebuggerSession } from '../../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { ExecutionContext } from '../../../../../../com/oracle/truffle/tools/dap/server/ExecutionContext.d.ts'
import type { ThreadsHandler$SuspendedThreadInfo } from '../../../../../../com/oracle/truffle/tools/dap/server/ThreadsHandler$SuspendedThreadInfo.d.ts'
import type { Scope } from '../../../../../../com/oracle/truffle/tools/dap/types/Scope.d.ts'
import type { StackFrame } from '../../../../../../com/oracle/truffle/tools/dap/types/StackFrame.d.ts'
import type { Variable } from '../../../../../../com/oracle/truffle/tools/dap/types/Variable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class StackFramesHandler extends Object {
    static DEFAULT_TOP_SCOPE_NAME: string;
    static evaluateOnStackFrame(paraminfo: ThreadsHandler$SuspendedThreadInfo, paramframeId: number, paramexpression: string): Variable;
    static topScopeDapName(paramguestName: string): string;
    constructor(context: ExecutionContext, debuggerSession: DebuggerSession)
    // private context: ExecutionContext;
    // private debuggerSession: DebuggerSession;
    // private getParent(dscope: DebugScope): DebugScope;
    getScopes(info: ThreadsHandler$SuspendedThreadInfo, frameId: number): Scope[];
    getStackTrace(info: ThreadsHandler$SuspendedThreadInfo): StackFrame[];
    topScopeDapName(dscope: DebugScope): string;
}