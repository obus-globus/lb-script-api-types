import type { BackgroundCompileQueue$Priority } from '../../../../com/oracle/truffle/runtime/BackgroundCompileQueue$Priority.d.ts'
import type { BackgroundCompileQueue$TruffleThreadPoolExecutor } from '../../../../com/oracle/truffle/runtime/BackgroundCompileQueue$TruffleThreadPoolExecutor.d.ts'
import type { CompilationTask } from '../../../../com/oracle/truffle/runtime/CompilationTask.d.ts'
import type { CompilationTask$SubmissionReason } from '../../../../com/oracle/truffle/runtime/CompilationTask$SubmissionReason.d.ts'
import type { EngineData } from '../../../../com/oracle/truffle/runtime/EngineData.d.ts'
import type { OptimizedCallTarget } from '../../../../com/oracle/truffle/runtime/OptimizedCallTarget.d.ts'
import type { OptimizedTruffleRuntime } from '../../../../com/oracle/truffle/runtime/OptimizedTruffleRuntime.d.ts'
import type { ExecutorService } from '../../../../java/util/concurrent/ExecutorService.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { AtomicLong } from '../../../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BackgroundCompileQueue extends Object {
    constructor(runtime: OptimizedTruffleRuntime)
    // private delayMillis: number;
    // private executor: BackgroundCompileQueue$TruffleThreadPoolExecutor;
    // private idCounter: AtomicLong;
    // private runtime: OptimizedTruffleRuntime;
    // private shutdown: boolean;
    // private awaitTermination(timeout: number): void;
    flush(engine: EngineData): void;
    getAllTargets(engine: EngineData): OptimizedCallTarget[];
    // private getExecutorService(callTarget: OptimizedCallTarget): ExecutorService;
    getQueueSize(): number;
    getQueuedTargets(engine: EngineData): OptimizedCallTarget[];
    newThreadFactory(threadNamePrefix: string, callTarget: OptimizedCallTarget, compilerThreadStackSize: number): ThreadFactory;
    // private nextId(): number;
    notifyIdleCompilerThread(): void;
    shutdownAndAwaitTermination(timeout: number): void;
    // private shutdownNow(): void;
    submitCompilation(priority: BackgroundCompileQueue$Priority, target: OptimizedCallTarget, submissionReason: CompilationTask$SubmissionReason): CompilationTask;
    submitInitialization(target: OptimizedCallTarget, action: (param0: CompilationTask) => void): CompilationTask;
    // private submitTask(compilationTask: CompilationTask, target: OptimizedCallTarget): CompilationTask;
}