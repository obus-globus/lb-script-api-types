import type { CompletableFuture } from '../../../java/util/concurrent/CompletableFuture.d.ts'
import type { CompletionStage } from '../../../java/util/concurrent/CompletionStage.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { Deferred } from '../../../kotlinx/coroutines/Deferred.d.ts'
import type { Job } from '../../../kotlinx/coroutines/Job.d.ts'
export class FutureKt extends Object {
    static asCompletableFuture<T extends unknown>(self: Deferred<T>): CompletableFuture<T>;
    static asCompletableFuture(self: Job): CompletableFuture<void>;
    static asDeferred<T extends unknown>(self: CompletionStage<T>): Deferred<T>;
    static await<T extends unknown>(self: CompletionStage<T>): T;
    static future<T extends unknown>(self: CoroutineScope, context: CoroutineContext, start: CoroutineStart, block: (param0: CoroutineScope) => T): CompletableFuture<T>;
    static future<T extends unknown>(self: CoroutineScope, context: Job, start: CoroutineStart, block: (param0: CoroutineScope) => T): CompletableFuture<T>;
}