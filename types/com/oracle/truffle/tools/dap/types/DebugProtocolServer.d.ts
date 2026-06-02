import type { AttachRequestArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/AttachRequestArguments.d.ts'
import type { BreakpointLocationsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/BreakpointLocationsArguments.d.ts'
import type { BreakpointLocationsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/BreakpointLocationsResponse$ResponseBody.d.ts'
import type { CancelArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/CancelArguments.d.ts'
import type { Capabilities } from '../../../../../../com/oracle/truffle/tools/dap/types/Capabilities.d.ts'
import type { CompletionsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/CompletionsArguments.d.ts'
import type { CompletionsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/CompletionsResponse$ResponseBody.d.ts'
import type { ConfigurationDoneArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/ConfigurationDoneArguments.d.ts'
import type { ContinueArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/ContinueArguments.d.ts'
import type { ContinueResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ContinueResponse$ResponseBody.d.ts'
import type { DataBreakpointInfoArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/DataBreakpointInfoArguments.d.ts'
import type { DataBreakpointInfoResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/DataBreakpointInfoResponse$ResponseBody.d.ts'
import type { DebugProtocolClient } from '../../../../../../com/oracle/truffle/tools/dap/types/DebugProtocolClient.d.ts'
import type { DebugProtocolServer$LoggerProxy } from '../../../../../../com/oracle/truffle/tools/dap/types/DebugProtocolServer$LoggerProxy.d.ts'
import type { DisassembleArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/DisassembleArguments.d.ts'
import type { DisassembleResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/DisassembleResponse$ResponseBody.d.ts'
import type { DisconnectArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/DisconnectArguments.d.ts'
import type { EvaluateArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/EvaluateArguments.d.ts'
import type { EvaluateResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/EvaluateResponse$ResponseBody.d.ts'
import type { ExceptionInfoArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/ExceptionInfoArguments.d.ts'
import type { ExceptionInfoResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ExceptionInfoResponse$ResponseBody.d.ts'
import type { GotoArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/GotoArguments.d.ts'
import type { GotoTargetsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/GotoTargetsArguments.d.ts'
import type { GotoTargetsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/GotoTargetsResponse$ResponseBody.d.ts'
import type { InitializeRequestArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/InitializeRequestArguments.d.ts'
import type { LaunchRequestArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/LaunchRequestArguments.d.ts'
import type { LoadedSourcesArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/LoadedSourcesArguments.d.ts'
import type { LoadedSourcesResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/LoadedSourcesResponse$ResponseBody.d.ts'
import type { ModulesArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/ModulesArguments.d.ts'
import type { ModulesResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ModulesResponse$ResponseBody.d.ts'
import type { NextArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/NextArguments.d.ts'
import type { PauseArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/PauseArguments.d.ts'
import type { ReadMemoryArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/ReadMemoryArguments.d.ts'
import type { ReadMemoryResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ReadMemoryResponse$ResponseBody.d.ts'
import type { RestartArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/RestartArguments.d.ts'
import type { RestartFrameArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/RestartFrameArguments.d.ts'
import type { ReverseContinueArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/ReverseContinueArguments.d.ts'
import type { ScopesArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/ScopesArguments.d.ts'
import type { ScopesResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ScopesResponse$ResponseBody.d.ts'
import type { SetBreakpointsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetBreakpointsArguments.d.ts'
import type { SetBreakpointsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/SetBreakpointsResponse$ResponseBody.d.ts'
import type { SetDataBreakpointsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetDataBreakpointsArguments.d.ts'
import type { SetDataBreakpointsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/SetDataBreakpointsResponse$ResponseBody.d.ts'
import type { SetExceptionBreakpointsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetExceptionBreakpointsArguments.d.ts'
import type { SetExpressionArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetExpressionArguments.d.ts'
import type { SetExpressionResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/SetExpressionResponse$ResponseBody.d.ts'
import type { SetFunctionBreakpointsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetFunctionBreakpointsArguments.d.ts'
import type { SetFunctionBreakpointsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/SetFunctionBreakpointsResponse$ResponseBody.d.ts'
import type { SetVariableArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SetVariableArguments.d.ts'
import type { SetVariableResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/SetVariableResponse$ResponseBody.d.ts'
import type { SourceArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/SourceArguments.d.ts'
import type { SourceResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/SourceResponse$ResponseBody.d.ts'
import type { StackTraceArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/StackTraceArguments.d.ts'
import type { StackTraceResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/StackTraceResponse$ResponseBody.d.ts'
import type { StepBackArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/StepBackArguments.d.ts'
import type { StepInArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/StepInArguments.d.ts'
import type { StepInTargetsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/StepInTargetsArguments.d.ts'
import type { StepInTargetsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/StepInTargetsResponse$ResponseBody.d.ts'
import type { StepOutArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/StepOutArguments.d.ts'
import type { TerminateArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/TerminateArguments.d.ts'
import type { TerminateThreadsArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/TerminateThreadsArguments.d.ts'
import type { ThreadsResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ThreadsResponse$ResponseBody.d.ts'
import type { VariablesArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/VariablesArguments.d.ts'
import type { VariablesResponse$ResponseBody } from '../../../../../../com/oracle/truffle/tools/dap/types/VariablesResponse$ResponseBody.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DebugProtocolServer extends Object {
    constructor()
    attach(args: AttachRequestArguments): CompletableFuture<void>;
    breakpointLocations(args: BreakpointLocationsArguments): CompletableFuture<BreakpointLocationsResponse$ResponseBody>;
    cancel(args: CancelArguments): CompletableFuture<void>;
    completions(args: CompletionsArguments): CompletableFuture<CompletionsResponse$ResponseBody>;
    configurationDone(args: ConfigurationDoneArguments): CompletableFuture<void>;
    connect(client: DebugProtocolClient): void;
    dataBreakpointInfo(args: DataBreakpointInfoArguments): CompletableFuture<DataBreakpointInfoResponse$ResponseBody>;
    disassemble(args: DisassembleArguments): CompletableFuture<DisassembleResponse$ResponseBody>;
    disconnect(args: DisconnectArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    doContinue(args: ContinueArguments, response: (param0: ContinueResponse$ResponseBody) => void): CompletableFuture<ContinueResponse$ResponseBody>;
    doGoto(args: GotoArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    evaluate(args: EvaluateArguments): CompletableFuture<EvaluateResponse$ResponseBody>;
    exceptionInfo(args: ExceptionInfoArguments): CompletableFuture<ExceptionInfoResponse$ResponseBody>;
    getLogger(): DebugProtocolServer$LoggerProxy;
    gotoTargets(args: GotoTargetsArguments): CompletableFuture<GotoTargetsResponse$ResponseBody>;
    initialize(args: InitializeRequestArguments): CompletableFuture<Capabilities>;
    launch(args: LaunchRequestArguments): CompletableFuture<void>;
    loadedSources(args: LoadedSourcesArguments): CompletableFuture<LoadedSourcesResponse$ResponseBody>;
    modules(args: ModulesArguments): CompletableFuture<ModulesResponse$ResponseBody>;
    next(args: NextArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    pause(args: PauseArguments): CompletableFuture<void>;
    readMemory(args: ReadMemoryArguments): CompletableFuture<ReadMemoryResponse$ResponseBody>;
    restart(args: RestartArguments): CompletableFuture<void>;
    restartFrame(args: RestartFrameArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    reverseContinue(args: ReverseContinueArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    scopes(args: ScopesArguments): CompletableFuture<ScopesResponse$ResponseBody>;
    setBreakpoints(args: SetBreakpointsArguments): CompletableFuture<SetBreakpointsResponse$ResponseBody>;
    setDataBreakpoints(args: SetDataBreakpointsArguments): CompletableFuture<SetDataBreakpointsResponse$ResponseBody>;
    setExceptionBreakpoints(args: SetExceptionBreakpointsArguments): CompletableFuture<void>;
    setExpression(args: SetExpressionArguments): CompletableFuture<SetExpressionResponse$ResponseBody>;
    setFunctionBreakpoints(args: SetFunctionBreakpointsArguments): CompletableFuture<SetFunctionBreakpointsResponse$ResponseBody>;
    setVariable(args: SetVariableArguments): CompletableFuture<SetVariableResponse$ResponseBody>;
    source(args: SourceArguments): CompletableFuture<SourceResponse$ResponseBody>;
    stackTrace(args: StackTraceArguments): CompletableFuture<StackTraceResponse$ResponseBody>;
    stepBack(args: StepBackArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    stepIn(args: StepInArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    stepInTargets(args: StepInTargetsArguments): CompletableFuture<StepInTargetsResponse$ResponseBody>;
    stepOut(args: StepOutArguments, responseConsumer: (param0: void) => void): CompletableFuture<void>;
    terminate(args: TerminateArguments): CompletableFuture<void>;
    terminateThreads(args: TerminateThreadsArguments): CompletableFuture<void>;
    threads(): CompletableFuture<ThreadsResponse$ResponseBody>;
    variables(args: VariablesArguments): CompletableFuture<VariablesResponse$ResponseBody>;
}