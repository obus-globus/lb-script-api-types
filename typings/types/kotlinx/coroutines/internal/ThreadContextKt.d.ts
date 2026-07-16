import type { Object } from '../../../java/lang/Object.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Symbol } from '../../../kotlinx/coroutines/internal/Symbol.d.ts'
export class ThreadContextKt extends Object {
    static NO_THREAD_ELEMENTS: Symbol;
    static restoreThreadContext(context: CoroutineContext, oldState: Object | null): void;
    static threadContextElements(context: CoroutineContext): Object;
    static updateThreadContext(context: CoroutineContext, countOrElement: Object | null): Object | null;
}