import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { ContinuationInterceptor$Key } from '../../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineDispatcher } from '../../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineDispatcher$Key } from '../../../kotlinx/coroutines/CoroutineDispatcher$Key.d.ts'
export class UnlimitedIoScheduler extends CoroutineDispatcher {
    static INSTANCE: UnlimitedIoScheduler;
    static Key: ContinuationInterceptor$Key;
    static Key: CoroutineDispatcher$Key;
    dispatch(context: CoroutineContext, block: () => void): void;
    dispatchYield(context: CoroutineContext, block: () => void): void;
    limitedParallelism(parallelism: number): CoroutineDispatcher;
    limitedParallelism(parallelism: number, name: string | null): CoroutineDispatcher;
    toString(): string;
}