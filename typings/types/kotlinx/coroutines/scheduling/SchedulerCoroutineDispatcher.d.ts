import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Executor } from '../../../java/util/concurrent/Executor.d.ts'
import type { ContinuationInterceptor$Key } from '../../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { ExecutorCoroutineDispatcher } from '../../../kotlinx/coroutines/ExecutorCoroutineDispatcher.d.ts'
import type { CoroutineScheduler } from '../../../kotlinx/coroutines/scheduling/CoroutineScheduler.d.ts'
export class SchedulerCoroutineDispatcher extends ExecutorCoroutineDispatcher {
    static Key: ContinuationInterceptor$Key;
    constructor(corePoolSize: number, maxPoolSize: number, idleWorkerKeepAliveNs: number, schedulerName: string)
    // private corePoolSize: number;
    // private coroutineScheduler: CoroutineScheduler;
    readonly executor: Executor;
    // private idleWorkerKeepAliveNs: number;
    // private maxPoolSize: number;
    // private schedulerName: string;
    close(): void;
    // private createScheduler(): CoroutineScheduler;
    dispatch(context: CoroutineContext, block: () => void): void;
    dispatchWithContext(block: () => void, context: boolean, fair: boolean): void;
    dispatchYield(context: CoroutineContext, block: () => void): void;
    restore(): void;
    shutdown(timeout: number): void;
    usePrivateScheduler(): void;
}