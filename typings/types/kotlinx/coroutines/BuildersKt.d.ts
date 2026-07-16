import type { Object } from '../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { CoroutineStart } from '../../kotlinx/coroutines/CoroutineStart.d.ts'
import type { Deferred } from '../../kotlinx/coroutines/Deferred.d.ts'
import type { EventLoop } from '../../kotlinx/coroutines/EventLoop.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
export class BuildersKt extends Object {
    static async<T extends unknown>(self: CoroutineScope, context: CoroutineContext, start: CoroutineStart, block: (param0: CoroutineScope) => T): Deferred<T>;
    static invoke<T extends unknown>(self: CoroutineDispatcher, block: (param0: CoroutineScope) => T): T;
    static launch(self: CoroutineScope, context: CoroutineContext, start: CoroutineStart, block: (param0: CoroutineScope) => void): Job;
    static runBlocking<T extends unknown>(context: CoroutineContext, block: (param0: CoroutineScope) => T): T;
    static runBlockingImpl<T extends unknown>(newContext: CoroutineContext, eventLoop: EventLoop | null, block: (param0: CoroutineScope) => T): T;
    static runBlockingK<T extends unknown>(context: CoroutineContext, block: (param0: CoroutineScope) => T): T;
    static withContext<T extends unknown>(context: CoroutineContext, block: (param0: CoroutineScope) => T): T;
}