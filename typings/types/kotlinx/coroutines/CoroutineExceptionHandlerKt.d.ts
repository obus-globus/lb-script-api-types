import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineExceptionHandler } from '../../kotlinx/coroutines/CoroutineExceptionHandler.d.ts'
export class CoroutineExceptionHandlerKt extends Object {
    static CoroutineExceptionHandler(paramarg0: (param0: Object | null, param1: Object | null) => void): CoroutineExceptionHandler;
    static handleCoroutineException(paramarg0: CoroutineContext, paramarg1: Throwable): void;
    static handlerException(paramarg0: Throwable, paramarg1: Throwable): Throwable;
}