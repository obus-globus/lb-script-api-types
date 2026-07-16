import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
export class CoroutineExceptionHandlerImpl_commonKt extends Object {
    static handleUncaughtCoroutineException(context: CoroutineContext, exception: Throwable): void;
}