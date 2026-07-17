import type { SandboxContext } from '../../../../com/oracle/truffle/sandbox/SandboxContext.d.ts'
import type { SandboxInstrument } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ContextPauseHandleWrapper extends Object {
    constructor(instrument: SandboxInstrument, context: SandboxContext, pauseFuture: Future<void>)
    // private context: SandboxContext;
    // private instrument: SandboxInstrument;
    // private pauseFuture: Future<void>;
    getContext(): SandboxContext;
    resume(triggerNumber: number): void;
    waitUntilPaused(triggerNumber: number): void;
}