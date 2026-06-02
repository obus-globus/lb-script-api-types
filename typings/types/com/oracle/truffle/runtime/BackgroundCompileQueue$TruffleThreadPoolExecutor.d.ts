import type { BackgroundCompileQueue$DynamicCompilationThresholds } from '../../../../com/oracle/truffle/runtime/BackgroundCompileQueue$DynamicCompilationThresholds.d.ts'
import type { CompilationTask$ExecutorServiceWrapper } from '../../../../com/oracle/truffle/runtime/CompilationTask$ExecutorServiceWrapper.d.ts'
import type { EngineData } from '../../../../com/oracle/truffle/runtime/EngineData.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { RunnableFuture } from '../../../../java/util/concurrent/RunnableFuture.d.ts'
import type { ThreadFactory } from '../../../../java/util/concurrent/ThreadFactory.d.ts'
import type { ThreadPoolExecutor } from '../../../../java/util/concurrent/ThreadPoolExecutor.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class BackgroundCompileQueue$TruffleThreadPoolExecutor extends ThreadPoolExecutor {
    private constructor(corePoolSize: number, maximumPoolSize: number, keepAliveTime: number, unit: TimeUnit, workQueue: () => void[], threadFactory: ThreadFactory, dynamicCompilationThresholds: BackgroundCompileQueue$DynamicCompilationThresholds)
    // private allTargets: CompilationTask$ExecutorServiceWrapper[];
    // private dynamicCompilationThresholds: BackgroundCompileQueue$DynamicCompilationThresholds;
    afterExecute(r: () => void, t: Throwable): void;
    awaitTermination(timeout: number, unit: TimeUnit): boolean;
    beforeExecute(t: Thread, r: () => void): void;
    flush(engine: EngineData): void;
    getAllTargets(engine: EngineData): E[];
    getQueuedTargets(engine: EngineData): E[];
    newTaskFor(callable: () => T): RunnableFuture<T>;
    remove(task: () => void): boolean;
    // private scaleThresholds(): void;
    submit(task: () => T): Future<T>;
}