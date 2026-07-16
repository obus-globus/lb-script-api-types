import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineExceptionHandler } from '../../kotlinx/coroutines/CoroutineExceptionHandler.d.ts'
export class CoroutineExceptionHandlerKt extends Object {
    static CoroutineExceptionHandler(handler: (param0: CoroutineContext, param1: Throwable) => void): CoroutineExceptionHandler;
    static handleCoroutineException(context: CoroutineContext, exception: Throwable): void;
    static handlerException(originalException: Throwable, thrownException: Throwable): Throwable;
}