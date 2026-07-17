import type { SandboxCheckerScheduler } from '../../../../com/oracle/truffle/sandbox/SandboxCheckerScheduler.d.ts'
import type { SandboxCheckerScheduler$SandboxChecker } from '../../../../com/oracle/truffle/sandbox/SandboxCheckerScheduler$SandboxChecker.d.ts'
import type { SandboxContext } from '../../../../com/oracle/truffle/sandbox/SandboxContext.d.ts'
import type { SandboxInstrument } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument.d.ts'
import type { SandboxLowMemoryListener } from '../../../../com/oracle/truffle/sandbox/SandboxLowMemoryListener.d.ts'
import type { SandboxMemoryLimitRetainedSizeChecker$Result } from '../../../../com/oracle/truffle/sandbox/SandboxMemoryLimitRetainedSizeChecker$Result.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
export class SandboxMemoryLimitChecker extends SandboxCheckerScheduler$SandboxChecker {
    constructor(scheduler: SandboxCheckerScheduler, context: SandboxContext, instrument: SandboxInstrument, lowMemoryListener: SandboxLowMemoryListener)
    // private allocatedBytesCheckFactor: number;
    // private instrument: SandboxInstrument;
    // private lastAllocatedBytes: number;
    // private lastRetainedBytes: number;
    // private lastRetainedSizeComputationFinishedRequestAllocatedBytes: number;
    // private lastRetainedSizeComputationRequestAllocatedBytes: number;
    // private lastRetainedSizeComputationRequestTime: number;
    // private lowMemoryListener: SandboxLowMemoryListener;
    // private memoryLimit: number;
    // private previousRetainedSizeComputationFinishedRequestAllocatedBytes: number;
    // private retainedBytesCheckInterval: number;
    // private retainedSizeComputationRequested: boolean;
    // private retainedSizeComputationResultFuture: Future<SandboxMemoryLimitRetainedSizeChecker$Result>;
    checkLimit(): boolean;
    // private getAllocatedBytes(c: SandboxContext): number;
    // private getComputationResultAndCancelIfNeeded(c: SandboxContext): boolean;
    logCancelPeriodicTask(c: SandboxContext, reason: string): void;
    logInactiveContext(c: SandboxContext): void;
    logReactivatedContext(c: SandboxContext): void;
    // private requestRetainedSizeComputation(c: SandboxContext, allocatedBytes: number): void;
}