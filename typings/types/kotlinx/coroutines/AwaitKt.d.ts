import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class AwaitKt extends Object {
    static awaitAll(paramarg0: Deferred<Object>[], paramarg1: Continuation<Object>): Object;
    static joinAll(paramarg0: Job[], paramarg1: Continuation<Object>): Object;
}