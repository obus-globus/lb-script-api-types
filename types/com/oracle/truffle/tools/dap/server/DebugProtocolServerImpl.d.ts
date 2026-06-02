import type { DebuggerSession } from '../../../../../../com/oracle/truffle/api/debug/DebuggerSession.d.ts'
import type { Enabler } from '../../../../../../com/oracle/truffle/tools/dap/instrument/Enabler.d.ts'
import type { DebugProtocolServerImpl$OneTimeExecutor } from '../../../../../../com/oracle/truffle/tools/dap/server/DebugProtocolServerImpl$OneTimeExecutor.d.ts'
import type { ExecutionContext } from '../../../../../../com/oracle/truffle/tools/dap/server/ExecutionContext.d.ts'
import type { AttachRequestArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/AttachRequestArguments.d.ts'
import type { BreakpointLocationsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/BreakpointLocationsArguments.d.ts'
import type { BreakpointLocationsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/BreakpointLocationsResponse$ResponseBody.d.ts'
import type { Capabilities } from '../../../../../../com/oracle/truffle/tools/dap/types/Capabilities.d.ts'
import type { ConfigurationDoneArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/ConfigurationDoneArguments.d.ts'
import type { ContinueArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/ContinueArguments.d.ts'
import type { ContinueResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ContinueResponse$ResponseBody.d.ts'
import type { DebugProtocolClient } from '../../../../../../com/oracle/truffle/tools/dap/types/DebugProtocolClient.d.ts'
import type { DebugProtocolServer } from '../../../../../../com/oracle/truffle/tools/dap/types/DebugProtocolServer.d.ts'
import type { DebugProtocolServer$LoggerProxy } from '../../../../../../com/oracle/truffle/tools/dap/types/DebugProtocolServer$LoggerProxy.d.ts'
import type { DisconnectArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/DisconnectArguments.d.ts'
import type { EvaluateArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/EvaluateArguments.d.ts'
import type { EvaluateResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/EvaluateResponse$ResponseBody.d.ts'
import type { ExceptionInfoArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/ExceptionInfoArguments.d.ts'
import type { ExceptionInfoResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ExceptionInfoResponse$ResponseBody.d.ts'
import type { InitializeRequestArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/InitializeRequestArguments.d.ts'
import type { LaunchRequestArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/LaunchRequestArguments.d.ts'
import type { LoadedSourcesArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/LoadedSourcesArguments.d.ts'
import type { LoadedSourcesResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/LoadedSourcesResponse$ResponseBody.d.ts'
import type { NextArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/NextArguments.d.ts'
import type { PauseArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/PauseArguments.d.ts'
import type { ScopesArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/ScopesArguments.d.ts'
import type { ScopesResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ScopesResponse$ResponseBody.d.ts'
import type { SetBreakpointsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetBreakpointsArguments.d.ts'
import type { SetBreakpointsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/SetBreakpointsResponse$ResponseBody.d.ts'
import type { SetExceptionBreakpointsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetExceptionBreakpointsArguments.d.ts'
import type { SetFunctionBreakpointsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetFunctionBreakpointsArguments.d.ts'
import type { SetFunctionBreakpointsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/SetFunctionBreakpointsResponse$ResponseBody.d.ts'
import type { SetVariableArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetVariableArguments.d.ts'
import type { SetVariableResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/SetVariableResponse$ResponseBody.d.ts'
import type { SourceArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SourceArguments.d.ts'
import type { SourceResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/SourceResponse$ResponseBody.d.ts'
import type { StackTraceArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/StackTraceArguments.d.ts'
import type { StackTraceResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/StackTraceResponse$ResponseBody.d.ts'
import type { StepInArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/StepInArguments.d.ts'
import type { StepOutArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/StepOutArguments.d.ts'
import type { ThreadsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ThreadsResponse$ResponseBody.d.ts'
import type { VariablesArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/VariablesArguments.d.ts'
import type { VariablesResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/VariablesResponse$ResponseBody.d.ts'
import type { Runnable } from '../../../../../../java/lang/Runnable.d.ts'
import type { ServerSocket } from '../../../../../../java/net/ServerSocket.d.ts'
import type { URI } from '../../../../../../java/net/URI.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DebugProtocolServerImpl extends DebugProtocolServer {
    static create(paramcontext: ExecutionContext, paramdebugBreak: boolean, paramwaitAttached: boolean, paraminspectInitialization: boolean, paramsourcePath: URI[]): DebugProtocolServerImpl;
    private constructor(context: ExecutionContext, debugBreak: boolean, waitAttached: boolean, inspectInitialization: boolean, sourcePath: URI[])
    // private client: DebugProtocolClient;
    // private clientConnectionExecutor: DebugProtocolServerImpl$OneTimeExecutor;
    // private context: ExecutionContext;
    // private debuggerSession: DebuggerSession;
    // private disposed: boolean;
    // private ioEnabler: Enabler;
    // private launched: boolean;
    // private runOnDispose: () => void[];
    // private sourcePath: URI[];
    attach(args: AttachRequestArguments): CompletableFuture<void>;
    breakpointLocations(args: BreakpointLocationsArguments): CompletableFuture<BreakpointLocationsResponse$ResponseBody>;
    configurationDone(args: ConfigurationDoneArguments): CompletableFuture<void>;
    connect(clnt: DebugProtocolClient): void;
    disconnect(args: DisconnectArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    dispose(): void;
    doContinue(args: ContinueArguments, responseConsumer: (param0: ContinueResponse$ResponseBody) => void): CompletableFuture<ContinueResponse$ResponseBody>;
    evaluate(args: EvaluateArguments): CompletableFuture<EvaluateResponse$ResponseBody>;
    exceptionInfo(args: ExceptionInfoArguments): CompletableFuture<ExceptionInfoResponse$ResponseBody>;
    getLogger(): DebugProtocolServer$LoggerProxy;
    initialize(args: InitializeRequestArguments): CompletableFuture<Capabilities>;
    launch(args: LaunchRequestArguments): CompletableFuture<void>;
    loadedSources(args: LoadedSourcesArguments): CompletableFuture<LoadedSourcesResponse$ResponseBody>;
    next(args: NextArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    // private onDispose(r: () => void): void;
    pause(args: PauseArguments): CompletableFuture<void>;
    scopes(args: ScopesArguments): CompletableFuture<ScopesResponse$ResponseBody>;
    setBreakpoints(args: SetBreakpointsArguments): CompletableFuture<SetBreakpointsResponse$ResponseBody>;
    setExceptionBreakpoints(args: SetExceptionBreakpointsArguments): CompletableFuture<void>;
    setFunctionBreakpoints(args: SetFunctionBreakpointsArguments): CompletableFuture<SetFunctionBreakpointsResponse$ResponseBody>;
    setVariable(args: SetVariableArguments): CompletableFuture<SetVariableResponse$ResponseBody>;
    source(args: SourceArguments): CompletableFuture<SourceResponse$ResponseBody>;
    stackTrace(args: StackTraceArguments): CompletableFuture<StackTraceResponse$ResponseBody>;
    start(serverSocket: ServerSocket): CompletableFuture<Object>;
    // private startDebuggerSession(): DebuggerSession;
    stepIn(args: StepInArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    stepOut(args: StepOutArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    threads(): CompletableFuture<ThreadsResponse$ResponseBody>;
    variables(args: VariablesArguments): CompletableFuture<VariablesResponse$ResponseBody>;
}