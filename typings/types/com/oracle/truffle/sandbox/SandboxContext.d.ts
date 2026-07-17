import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { SandboxInstrument } from '../../../../com/oracle/truffle/sandbox/SandboxInstrument.d.ts'
import type { SandboxMemoryLimitChecker } from '../../../../com/oracle/truffle/sandbox/SandboxMemoryLimitChecker.d.ts'
import type { SandboxThreadContext } from '../../../../com/oracle/truffle/sandbox/SandboxThreadContext.d.ts'
import type { SandboxTimeLimitChecker } from '../../../../com/oracle/truffle/sandbox/SandboxTimeLimitChecker.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Duration } from '../../../../java/time/Duration.d.ts'
import type { AtomicBoolean } from '../../../../java/util/concurrent/atomic/AtomicBoolean.d.ts'
import type { AtomicInteger } from '../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionKey } from '../../../../org/graalvm/options/OptionKey.d.ts'
export class SandboxContext extends Object {
    static MaxASTDepth: OptionKey<number>;
    constructor(instrument: SandboxInstrument, context: TruffleContext)
    // private activeThreadsLimit: number;
    // private allocatedBytesCheckEnabled: boolean;
    // private allocatedBytesCheckFactor: number;
    // private allocatedBytesCheckInterval: Duration;
    // private allocatedBytesOfRemovedThreads: number;
    // private astDepthLimit: number;
    // private changedActiveStatusCount: number;
    // private collectedThreads: ReferenceQueue<Thread>;
    // private contextWeakReference: WeakReference<SandboxContext>;
    // private cpuTimeLimit: Duration;
    // private cpuTimeLimitAccuracy: Duration;
    // private errorStreamLimit: number;
    // private heapMemoryLimit: number;
    // private id: number;
    // private initialized: boolean;
    // private instrument: SandboxInstrument;
    // private lastRetainedBytes: number;
    // private lowMemoryTriggerEnabled: boolean;
    // private maxActiveThreadsTraced: number;
    // private maxAstDepthTraced: number;
    // private maxCpuTimeTraced: number;
    // private maxHeapMemoryTraced: number;
    // private maxStatements: number;
    // private maxStatementsIncludeInternal: boolean;
    // private memoryLimitChecker: SandboxMemoryLimitChecker;
    // private minStackFramesTraced: number;
    // private outputStreamLimit: number;
    // private retainedBytesCheckFactor: number;
    // private retainedBytesCheckInterval: Duration;
    // private retainedSizeComputationCancelled: AtomicBoolean;
    // private reuseLowMemoryTriggerThreshold: boolean;
    // private stackFrameLimit: number;
    // private statementCounter: number;
    // private threadCount: number;
    // private threadCounter: AtomicInteger;
    // private threads: SandboxThreadContext[];
    // private timeExecutedOfRemovedThreads: Duration;
    // private timeLimitChecker: SandboxTimeLimitChecker;
    // private tracedLimitsPrinted: AtomicBoolean;
    // private tracingEnabled: boolean;
    // private truffleContext: TruffleContext;
    // private volatileErrorSizeCounter: AtomicLong;
    // private volatileOutputSizeCounter: AtomicLong;
    // private volatileStatementCounter: AtomicLong;
    computeStackFramesLimit(limit: number): number;
    computeStatementsLimit(limit: number): number;
    createThreadContext(t: Thread): SandboxThreadContext;
    getAllocatedBytes(): number;
    getInstrument(): SandboxInstrument;
    getTimeActive(): Duration;
    getTruffleContext(): TruffleContext;
    hasASTDepthLimit(): boolean;
    hasActiveThreadsLimit(): boolean;
    hasCPULimit(): boolean;
    hasErrorStreamLimit(): boolean;
    hasMemoryLimit(): boolean;
    hasOutputStreamLimit(): boolean;
    hasStackFrameLimit(): boolean;
    hasStatementLimit(): boolean;
    isClosed(): boolean;
    isTracingEnabled(): boolean;
    printLimits(): void;
    removeCollectedThreads(): void;
    removeThreadContext(threadContext: SandboxThreadContext): void;
    resetLimits(): void;
}