import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
export class ThreadContextKt extends Object {
    static NO_THREAD_ELEMENTS: Symbol;
    static restoreThreadContext(paramarg0: CoroutineContext, paramarg1: Object): void;
    static threadContextElements(paramarg0: CoroutineContext): Object;
    static updateThreadContext(paramarg0: CoroutineContext, paramarg1: Object): Object;
}