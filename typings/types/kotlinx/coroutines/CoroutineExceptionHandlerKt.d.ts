import type { Object } from '../../java/lang/Object.d.ts'
import type { Function2 } from '../../kotlin/jvm/functions/Function2.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineExceptionHandler } from '../../kotlinx/coroutines/CoroutineExceptionHandler.d.ts'
export class CoroutineExceptionHandlerKt extends Object {
    static CoroutineExceptionHandler(paramarg0: Function2<Object, Object, void>): CoroutineExceptionHandler;
    static handleCoroutineException(paramarg0: CoroutineContext, paramarg1: Throwable): void;
    static handlerException(paramarg0: Throwable, paramarg1: Throwable): Throwable;
}