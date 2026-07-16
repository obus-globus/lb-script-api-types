import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { NonCancellable } from '../../kotlinx/coroutines/NonCancellable.d.ts'
export class GuidanceKt extends Object {
    static async<T extends unknown>(context: CoroutineContext, start: CoroutineStart, block: (param0: CoroutineScope) => T): Deferred<T>;
    static async<T extends unknown>(self: CoroutineScope, context: Job, start: CoroutineStart, block: (param0: CoroutineScope) => T): Deferred<T>;
    static async<T extends unknown>(self: CoroutineScope, context: NonCancellable, start: CoroutineStart, block: (param0: CoroutineScope) => T): Deferred<T>;
    static launch(context: CoroutineContext, start: CoroutineStart, block: (param0: CoroutineScope) => void): Job;
    static launch(self: CoroutineScope, context: Job, start: CoroutineStart, block: (param0: CoroutineScope) => void): Job;
    static launch(self: CoroutineScope, context: NonCancellable, start: CoroutineStart, block: (param0: CoroutineScope) => void): Job;
}