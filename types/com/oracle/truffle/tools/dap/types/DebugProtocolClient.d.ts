import type { BreakpointEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/BreakpointEvent$EventBody.d.ts'
import type { CapabilitiesEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/CapabilitiesEvent$EventBody.d.ts'
import type { ContinuedEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ContinuedEvent$EventBody.d.ts'
import type { ExitedEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ExitedEvent$EventBody.d.ts'
import type { LoadedSourceEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/LoadedSourceEvent$EventBody.d.ts'
import type { ModuleEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ModuleEvent$EventBody.d.ts'
import type { OutputEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/OutputEvent$EventBody.d.ts'
import type { ProcessEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ProcessEvent$EventBody.d.ts'
import type { ProgressEndEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ProgressEndEvent$EventBody.d.ts'
import type { ProgressStartEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ProgressStartEvent$EventBody.d.ts'
import type { ProgressUpdateEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ProgressUpdateEvent$EventBody.d.ts'
import type { RunInTerminalRequestArguments } from '../../../../../../com/oracle/truffle/tools/dap/types/RunInTerminalRequestArguments.d.ts'
import type { RunInTerminalResponse } from '../../../../../../com/oracle/truffle/tools/dap/types/RunInTerminalResponse.d.ts'
import type { StoppedEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/StoppedEvent$EventBody.d.ts'
import type { TerminatedEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/TerminatedEvent$EventBody.d.ts'
import type { ThreadEvent$EventBody } from '../../../../../../com/oracle/truffle/tools/dap/types/ThreadEvent$EventBody.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface DebugProtocolClient extends Object{
    breakpoint(body: BreakpointEvent$EventBody): void;
    capabilities(body: CapabilitiesEvent$EventBody): void;
    continued(body: ContinuedEvent$EventBody): void;
    exited(body: ExitedEvent$EventBody): void;
    initialized(): void;
    loadedSource(body: LoadedSourceEvent$EventBody): void;
    module(body: ModuleEvent$EventBody): void;
    output(body: OutputEvent$EventBody): void;
    process(body: ProcessEvent$EventBody): void;
    progressEnd(body: ProgressEndEvent$EventBody): void;
    progressStart(body: ProgressStartEvent$EventBody): void;
    progressUpdate(body: ProgressUpdateEvent$EventBody): void;
    runInTerminal(args: RunInTerminalRequestArguments): CompletableFuture<RunInTerminalResponse>;
    stopped(body: StoppedEvent$EventBody): void;
    terminated(body: TerminatedEvent$EventBody): void;
    thread(body: ThreadEvent$EventBody): void;
}