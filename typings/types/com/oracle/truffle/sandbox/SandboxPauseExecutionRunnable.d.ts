import type { ContextPauseHandleWrapper } from '../../../../com/oracle/truffle/sandbox/ContextPauseHandleWrapper.d.ts'
import type { SandboxInstrument } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SandboxPauseExecutionRunnable extends Object implements Runnable {
    constructor(instrument: SandboxInstrument)
    // private contextsToResume: ContextPauseHandleWrapper[];
    readonly finished: boolean;
    // private instrument: SandboxInstrument;
    // private lowMemoryTriggerNumber: number;
    // private phaserRegistered: boolean;
    // private shouldPauseAndOrResume: boolean;
    initiatePauseAndResume(triggerNumber: number): void;
    initiateResume(triggerNumber: number): void;
    isFinished(): boolean;
    // private pauseContexts(triggerNumber: number): void;
    // private resumeContexts(localContextsToResume: ContextPauseHandleWrapper[], triggerNumber: number): void;
    run(): void;
    setFinished(): void;
    // private waitForResumeRequest(): ContextPauseHandleWrapper[];
    // private waitTillPaused(triggerNumber: number): void;
}