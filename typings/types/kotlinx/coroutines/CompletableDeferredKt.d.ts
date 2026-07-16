import type { Object } from '../../java/lang/Object.d.ts'
import type { Result } from '../../kotlin/Result.d.ts'
import type { CompletableDeferred } from '../../kotlinx/coroutines/CompletableDeferred.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class CompletableDeferredKt extends Object {
    static CompletableDeferred<T extends unknown>(value: T): CompletableDeferred<T>;
    static CompletableDeferred<T extends unknown>(parent: Job | null): CompletableDeferred<T>;
    static asDeferred<T extends unknown>(self: CompletableDeferred<T>): Deferred<T>;
    static completeWith<T extends unknown>(self: CompletableDeferred<T>, result: Result<T>): boolean;
}