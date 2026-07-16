import type { ContinuationInterceptor$Key } from '../../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { SchedulerCoroutineDispatcher } from '../../../kotlinx/coroutines/scheduling/SchedulerCoroutineDispatcher.d.ts'
export class DefaultScheduler extends SchedulerCoroutineDispatcher {
    static INSTANCE: DefaultScheduler;
    static Key: ContinuationInterceptor$Key;
    close(): void;
    limitedParallelism(parallelism: number): CoroutineDispatcher;
    limitedParallelism(parallelism: number, name: string | null): CoroutineDispatcher;
    shutdown(): void;
    shutdown(timeout: number): void;
    toString(): string;
}