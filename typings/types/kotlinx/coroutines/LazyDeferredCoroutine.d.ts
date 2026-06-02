import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { DeferredCoroutine } from '../../kotlinx/coroutines/DeferredCoroutine.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
export class LazyDeferredCoroutine<T extends Object | number | string | boolean> extends DeferredCoroutine<T> {
    static Key: Job$Key;
    constructor(parentContext: CoroutineContext, block: Function2<Object, Object, Object>)
    // private continuation: Continuation<void>;
    protected onStart(): void;
}