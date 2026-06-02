import type { ContinuationInterceptor$Key } from '../../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineDispatcher$Key } from '../../../kotlinx/coroutines/CoroutineDispatcher$Key.d.ts'
import type { ExecutorCoroutineDispatcher$Key } from '../../../kotlinx/coroutines/ExecutorCoroutineDispatcher$Key.d.ts'
import type { SchedulerCoroutineDispatcher } from '../../../kotlinx/coroutines/scheduling/SchedulerCoroutineDispatcher.d.ts'
export class DefaultScheduler extends SchedulerCoroutineDispatcher {
    static INSTANCE: DefaultScheduler;
    static Key: ContinuationInterceptor$Key;
    static Key: CoroutineDispatcher$Key;
    static Key: ExecutorCoroutineDispatcher$Key;
    close(): void;
    limitedParallelism(parallelism: number, name: string | null): CoroutineDispatcher;
    shutdown(): void;
    toString(): string;
}