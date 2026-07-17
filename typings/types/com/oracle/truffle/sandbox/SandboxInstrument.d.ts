import type { Assumption } from '../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { ContextLocal } from '../../../../com/oracle/truffle/api/ContextLocal.d.ts'
import type { ContextThreadLocal } from '../../../../com/oracle/truffle/api/ContextThreadLocal.d.ts'
import type { TruffleContext } from '../../../../com/oracle/truffle/api/TruffleContext.d.ts'
import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { EventBinding } from '../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { TruffleInstrument } from '../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument.d.ts'
import type { TruffleInstrument$Env } from '../../../../com/oracle/truffle/api/instrumentation/TruffleInstrument$Env.d.ts'
import type { ContextPauseHandleWrapper } from '../../../../com/oracle/truffle/sandbox/ContextPauseHandleWrapper.d.ts'
import type { JoinableThreadPoolExecutor } from '../../../../com/oracle/truffle/sandbox/JoinableThreadPoolExecutor.d.ts'
import type { SandboxCheckerScheduler } from '../../../../com/oracle/truffle/sandbox/SandboxCheckerScheduler.d.ts'
import type { SandboxContext } from '../../../../com/oracle/truffle/sandbox/SandboxContext.d.ts'
import type { SandboxMemoryLimitRetainedSizeChecker$Result } from '../../../../com/oracle/truffle/sandbox/SandboxMemoryLimitRetainedSizeChecker$Result.d.ts'
import type { SandboxPauseExecutionRunnable } from '../../../../com/oracle/truffle/sandbox/SandboxPauseExecutionRunnable.d.ts'
import type { SandboxThreadContext } from '../../../../com/oracle/truffle/sandbox/SandboxThreadContext.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { ReferenceQueue } from '../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OptionDescriptor } from '../../../../org/graalvm/options/OptionDescriptor.d.ts'
export class SandboxInstrument extends TruffleInstrument {
    static isInterpreterCallStackHeadRoomSupported(): boolean;
    constructor()
    // private astDepthLimit: number;
    // private astDepthLimitBinding: EventBinding<Object>;
    // private bindings: EventBinding<Object>[];
    // private cancelExecutor: JoinableThreadPoolExecutor;
    // private contextCleanupAttached: boolean;
    readonly disposed: boolean;
    // private environment: TruffleInstrument$Env;
    // private errorStreamBinding: EventBinding<Object>;
    // private id: number;
    // private instrumentWeakReference: WeakReference<SandboxInstrument>;
    // private limitCheckerExecutor: JoinableThreadPoolExecutor;
    // private limitsBindingsAttached: boolean;
    // private logger: TruffleLogger;
    // private maxStatements: number;
    // private maxStatementsIncludeInternal: boolean;
    // private memoryCheckerScheduler: SandboxCheckerScheduler;
    // private memoryLimitedInstrument: boolean;
    // private noPriorityChangeNeeded: Assumption;
    // private noThreadAllocationTrackingNeeded: Assumption;
    // private noThreadCountNeeded: Assumption;
    // private noThreadTimingNeeded: Assumption;
    // private noTracingNeeded: Assumption;
    // private outputStreamBinding: EventBinding<Object>;
    // private pauseExecutionRunnable: SandboxPauseExecutionRunnable;
    // private pauseInstrumentExecutor: JoinableThreadPoolExecutor;
    // private pausedSandboxContexts: ContextPauseHandleWrapper[];
    // private retainedSizeCheckerExecutor: JoinableThreadPoolExecutor;
    // private sameStatementLimit: Assumption;
    // private sandboxContext: ContextLocal<SandboxContext>;
    // private sandboxContextReferenceQueue: ReferenceQueue<SandboxContext>;
    // private sandboxContexts: WeakReference<SandboxContext>[];
    // private sandboxThreadContext: ContextThreadLocal<SandboxThreadContext>;
    // private singleThreadPerContext: Assumption;
    // private stackFrameLimitBinding: EventBinding<Object>;
    // private statementLimitBinding: EventBinding<Object>;
    // private timeCheckerScheduler: SandboxCheckerScheduler;
    // private createContext(context: TruffleContext): SandboxContext;
    // private createThreadContext(context: TruffleContext, t: Thread): SandboxThreadContext;
    getContextOptionDescriptors(): OptionDescriptor[];
    getMemoryLimitedSandboxContexts(): SandboxContext[];
    // private getSandboxContext(context: TruffleContext): SandboxContext;
    // private getThreadContext(context: TruffleContext, t: Thread): SandboxThreadContext;
    // private initialize(context: SandboxContext): void;
    isDisposed(): boolean;
    // private lazyInitialize(): void;
    onCreate(env: TruffleInstrument$Env): void;
    onDispose(env: TruffleInstrument$Env): void;
    onFinalize(env: TruffleInstrument$Env): void;
    pauseSandboxContext(pauseRunnable: SandboxPauseExecutionRunnable, sandboxCtx: SandboxContext, cancelRetainedSizeComputation: boolean): void;
    // private submitInCancelExecutor(runnable: () => void): Future<Object>;
    submitInLimitCheckerExecutor(runnable: () => void): void;
    // private submitInPauseInstrumentExecutor(runnable: () => void): void;
    submitInRetainedSizeCheckerExecutor(callable: () => SandboxMemoryLimitRetainedSizeChecker$Result): Future<SandboxMemoryLimitRetainedSizeChecker$Result>;
    // private validateSandbox(context: TruffleContext): void;
}