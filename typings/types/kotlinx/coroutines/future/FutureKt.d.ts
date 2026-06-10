import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { CompletionStage } from '../../../java/util/concurrent/CompletionStage.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { Deferred } from '../../../kotlinx/coroutines/Deferred.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
export class FutureKt extends Object {
    static asCompletableFuture(paramarg0: Deferred<Object>): CompletableFuture<Object>;
    static asCompletableFuture(paramarg0: Job): CompletableFuture<void>;
    static asDeferred(paramarg0: CompletionStage<Object>): Deferred<Object>;
    static await(paramarg0: CompletionStage<Object>, paramarg1: Continuation<Object>): Object;
    static future(paramarg0: CoroutineScope, paramarg1: CoroutineContext, paramarg2: CoroutineStart, paramarg3: (param0: Object, param1: Object) => Object): CompletableFuture<Object>;
}