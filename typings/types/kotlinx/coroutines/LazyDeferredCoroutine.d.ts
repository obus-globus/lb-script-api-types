import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { DeferredCoroutine } from '../../kotlinx/coroutines/DeferredCoroutine.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
export class LazyDeferredCoroutine<T extends unknown> extends DeferredCoroutine<T> {
    static Key: Job$Key;
    constructor(parentContext: CoroutineContext, block: (param0: CoroutineScope) => T)
    // private continuation: Continuation<void>;
    protected onStart(): void;
}