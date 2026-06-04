import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AbstractCoroutineContextElement } from '../../kotlin/coroutines/AbstractCoroutineContextElement.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { ContinuationInterceptor } from '../../kotlin/coroutines/ContinuationInterceptor.d.ts'
import type { ContinuationInterceptor$Key } from '../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
import type { CoroutineDispatcher$Key } from '../../kotlinx/coroutines/CoroutineDispatcher$Key.d.ts'
export abstract class CoroutineDispatcher extends AbstractCoroutineContextElement implements ContinuationInterceptor {
    static Key: ContinuationInterceptor$Key;
    static Key: CoroutineDispatcher$Key;
    constructor()
    dispatch(context: CoroutineContext, block: () => void): void;
    dispatchYield(context: CoroutineContext, block: () => void): void;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    interceptContinuation(continuation: Continuation<T>): Continuation<T>;
    isDispatchNeeded(context: CoroutineContext): boolean;
    limitedParallelism(parallelism: number): CoroutineDispatcher;
    limitedParallelism(parallelism: number, name: string | null): CoroutineDispatcher;
    minusKey(key: CoroutineContext$Key<Object>): CoroutineContext;
    plus(context: CoroutineContext): CoroutineContext;
    plus(other: CoroutineDispatcher): CoroutineDispatcher;
    releaseInterceptedContinuation(continuation: Continuation<Object>): void;
    toString(): string;
}