import type { ContinuationInterceptor$Key } from '../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineDispatcher$Key } from '../../kotlinx/coroutines/CoroutineDispatcher$Key.d.ts'
export abstract class MainCoroutineDispatcher extends CoroutineDispatcher {
    static Key: ContinuationInterceptor$Key;
    static Key: CoroutineDispatcher$Key;
    constructor()
    readonly immediate: MainCoroutineDispatcher;
    limitedParallelism(parallelism: number, name: string | null): CoroutineDispatcher;
    toString(): string;
    protected toStringInternalImpl(): string | null;
}