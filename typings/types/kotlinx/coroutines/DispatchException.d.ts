import type { Exception } from '../../java/lang/Exception.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineDispatcher } from '../../kotlinx/coroutines/CoroutineDispatcher.d.ts'
export class DispatchException extends Exception {
    constructor(cause: Throwable, dispatcher: CoroutineDispatcher, context: CoroutineContext)
    readonly cause: Throwable;
}