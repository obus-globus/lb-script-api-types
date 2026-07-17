import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { AtomicInt } from '../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
export class AwaitAll<T extends unknown> extends Object {
    constructor(deferreds: Deferred<T>[])
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    await($completion: Continuation<T[]>): any;
}