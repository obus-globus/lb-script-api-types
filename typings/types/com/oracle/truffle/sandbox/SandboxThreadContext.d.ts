import type { SandboxContext } from '../../../../com/oracle/truffle/sandbox/SandboxContext.d.ts'
import type { SandboxThreadContext$ThreadReference } from '../../../../com/oracle/truffle/sandbox/SandboxThreadContext$ThreadReference.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SandboxThreadContext extends Object {
    constructor(context: SandboxContext, thread: Thread)
    // private bytesAllocated: number;
    // private deprioritized: boolean;
    // private enteredCount: number;
    // private frameCounter: number;
    // private lastAllocatedBytesSnapshot: number;
    // private lastEntered: number;
    // private thread: SandboxThreadContext$ThreadReference;
    // private timeExecuted: number;
    getAllocatedBytes(): number;
    getTime(t: Thread): number;
    getTimeExecuted(): Duration;
    pauseAllocationTracking(): void;
    resetTiming(): void;
    resumeAllocationTracking(): void;
}