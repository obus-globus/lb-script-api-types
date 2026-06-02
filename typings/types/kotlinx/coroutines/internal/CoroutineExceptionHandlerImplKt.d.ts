import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineExceptionHandler } from '../../../kotlinx/coroutines/CoroutineExceptionHandler.d.ts'
export class CoroutineExceptionHandlerImplKt extends Object {
    static ensurePlatformExceptionHandlerLoaded(paramarg0: CoroutineExceptionHandler): void;
    static getPlatformExceptionHandlers(): E[];
    static propagateExceptionFinalResort(paramarg0: Throwable): void;
}