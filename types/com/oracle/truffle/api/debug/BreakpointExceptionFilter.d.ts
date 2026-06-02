import type { BreakpointExceptionFilter$Match } from '../../../../../com/oracle/truffle/api/debug/BreakpointExceptionFilter$Match.d.ts'
import type { Debugger } from '../../../../../com/oracle/truffle/api/debug/Debugger.d.ts'
import type { DebuggerSession$StableBoolean } from '../../../../../com/oracle/truffle/api/debug/DebuggerSession$StableBoolean.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ThreadLocal } from '../../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class BreakpointExceptionFilter extends Object {
    constructor(caught: boolean, uncaught: boolean)
    // private caught: boolean;
    // private debugger: Debugger;
    // private exceptionsOnThreads: ThreadLocal<Throwable>;
    // private haveReportedExceptions: DebuggerSession$StableBoolean;
    // private reportedExceptions: Throwable[];
    // private uncaught: boolean;
    // private doResetReportedException(): void;
    matchException(throwNode: Node, exception: Throwable): BreakpointExceptionFilter$Match;
    resetReportedException(): void;
    setDebugger(debugger_: Debugger): void;
    // private testExceptionCaught(throwNode: Node, exception: Throwable): BreakpointExceptionFilter$Match;
    // private wasReported(exception: Throwable): boolean;
}