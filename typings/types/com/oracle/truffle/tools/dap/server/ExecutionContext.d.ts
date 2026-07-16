import type { TruffleContext } from '../../../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleLogger } from '../../../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { DebuggerSession } from '../../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { ContextsListener } from '../../../../../../com/oracle/truffle/api/instrumentation/ContextsListener.d.ts'
import type { EventBinding } from '../../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { LoadSourceListener } from '../../../../../../com/oracle/truffle/api/instrumentation/LoadSourceListener.d.ts'
import type { ThreadsListener } from '../../../../../../com/oracle/truffle/api/instrumentation/ThreadsListener.d.ts'
import type { TruffleInstrument$Env } from '../../../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { BreakpointsHandler } from '../../../../../../com/oracle/truffle/tools/dap/server/BreakpointsHandler.d.ts'
import type { LoadedSourcesHandler } from '../../../../../../com/oracle/truffle/tools/dap/server/LoadedSourcesHandler.d.ts'
import type { StackFramesHandler } from '../../../../../../com/oracle/truffle/tools/dap/server/StackFramesHandler.d.ts'
import type { ThreadsHandler } from '../../../../../../com/oracle/truffle/tools/dap/server/ThreadsHandler.d.ts'
import type { VariablesHandler } from '../../../../../../com/oracle/truffle/tools/dap/server/VariablesHandler.d.ts'
import type { DebugProtocolClient } from '../../../../../../com/oracle/truffle/tools/dap/types/DebugProtocolClient.d.ts'
import type { PrintWriter } from '../../../../../../java/io/PrintWriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ExecutionContext extends Object {
    constructor(env: TruffleInstrument$Env, info: PrintWriter, err: PrintWriter, inspectInternal: boolean, inspectInitialization: boolean)
    readonly breakpointsHandler: BreakpointsHandler;
    readonly client: DebugProtocolClient;
    // private columnsStartAt1: boolean;
    // private contexts: TruffleContext[];
    // private contextsBinding: EventBinding<ContextsListener>;
    readonly env: TruffleInstrument$Env;
    readonly err: PrintWriter;
    readonly info: PrintWriter;
    readonly inspectInitialization: boolean;
    readonly inspectInternal: boolean;
    readonly linesStartAt1: boolean;
    readonly loadedSourcesHandler: LoadedSourcesHandler;
    readonly logger: TruffleLogger;
    // private runPermission: boolean[];
    // private srcBinding: EventBinding<LoadSourceListener>;
    readonly stackFramesHandler: StackFramesHandler;
    // private thrBinding: EventBinding<ThreadsListener>;
    readonly threadsHandler: ThreadsHandler;
    readonly variablesHandler: VariablesHandler;
    clientToDebuggerColumn(col: number): number;
    clientToDebuggerLine(line: number): number;
    debuggerToClientColumn(col: number): number;
    debuggerToClientLine(line: number): number;
    dispose(): void;
    doRunIfWaitingForDebugger(): void;
    getATruffleContext(): TruffleContext;
    getBreakpointsHandler(): BreakpointsHandler;
    getClient(): DebugProtocolClient;
    getEnv(): TruffleInstrument$Env;
    getErr(): PrintWriter;
    getInfo(): PrintWriter;
    getLoadedSourcesHandler(): LoadedSourcesHandler;
    getLogger(): TruffleLogger;
    getStackFramesHandler(): StackFramesHandler;
    getThreadsHandler(): ThreadsHandler;
    getVariablesHandler(): VariablesHandler;
    initClient(dpClient: DebugProtocolClient): void;
    initSession(debuggerSession: DebuggerSession): void;
    isInspectInitialization(): boolean;
    isInspectInternal(): boolean;
    setColumnsStartAt1(value: boolean): void;
    setLinesStartAt1(value: boolean): void;
    waitForRunPermission(): void;
}