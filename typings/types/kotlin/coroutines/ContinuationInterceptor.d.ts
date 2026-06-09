import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineContext$Element } from '../../kotlin/coroutines/CoroutineContext$Element.d.ts'
import type { CoroutineContext$Key } from '../../kotlin/coroutines/CoroutineContext$Key.d.ts'
export interface ContinuationInterceptor extends Object, CoroutineContext$Element {
    fold<R extends Object | number | string | boolean>(initial: R, operation: (param0: R, param1: CoroutineContext$Element) => R): R;
    get<E extends CoroutineContext$Element>(key: CoroutineContext$Key<E>): E | null;
    interceptContinuation(continuation: Continuation<T>): Continuation<T>;
    minusKey(key: CoroutineContext$Key<Object>): CoroutineContext;
    releaseInterceptedContinuation(continuation: Continuation<Object>): void;
}