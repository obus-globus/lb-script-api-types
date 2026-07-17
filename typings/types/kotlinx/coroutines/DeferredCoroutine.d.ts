import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AbstractCoroutine } from '../../kotlinx/coroutines/AbstractCoroutine.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
import type { SelectClause1 } from '../../kotlinx/coroutines/selects/SelectClause1.d.ts'
export class DeferredCoroutine<T extends unknown> extends AbstractCoroutine<T> implements Deferred<T> {
    static Key: Job$Key;
    constructor(parentContext: CoroutineContext, active: boolean)
    readonly onAwait: SelectClause1<T>;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    await($completion: Continuation<T>): any;
    getCompleted(): T;
}