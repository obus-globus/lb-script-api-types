import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
import type { ScopeCoroutine } from '../../kotlinx/coroutines/internal/ScopeCoroutine.d.ts'
export class SupervisorCoroutine<T extends Object | number | string | boolean> extends ScopeCoroutine<T> {
    static Key: Job$Key;
    constructor(context: CoroutineContext, uCont: Continuation<T>)
    childCancelled(cause: Throwable): boolean;
}