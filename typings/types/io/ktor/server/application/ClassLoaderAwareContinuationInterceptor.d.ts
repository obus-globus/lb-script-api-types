import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { ContinuationInterceptor } from '../../../../kotlin/coroutines/ContinuationInterceptor.d.ts'
import type { ContinuationInterceptor$Key } from '../../../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export class ClassLoaderAwareContinuationInterceptor extends Object implements ContinuationInterceptor {
    static INSTANCE: ClassLoaderAwareContinuationInterceptor;
    static Key: ContinuationInterceptor$Key;
    readonly key: CoroutineContext$Key<any>;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    interceptContinuation<T extends unknown>(continuation: Continuation<T>): Continuation<T>;
    minusKey(key: CoroutineContext$Key<any>): CoroutineContext;
    releaseInterceptedContinuation(continuation: Continuation<Object>): void;
}