import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { UndispatchedCoroutine } from '../../kotlinx/coroutines/UndispatchedCoroutine.d.ts'
export class CoroutineContextKt extends Object {
    static getCoroutineName(paramarg0: CoroutineContext): string;
    static newCoroutineContext(paramarg0: CoroutineContext, paramarg1: CoroutineContext): CoroutineContext;
    static newCoroutineContext(paramarg0: CoroutineScope, paramarg1: CoroutineContext): CoroutineContext;
    static undispatchedCompletion(paramarg0: CoroutineStackFrame): UndispatchedCoroutine<Object>;
    static updateUndispatchedCompletion(paramarg0: Continuation<Object>, paramarg1: CoroutineContext, paramarg2: Object): UndispatchedCoroutine<Object>;
    static withContinuationContext(paramarg0: Continuation<Object>, paramarg1: Object, paramarg2: () => Object | null): Object | null;
    static withCoroutineContext(paramarg0: CoroutineContext, paramarg1: Object, paramarg2: () => Object | null): Object | null;
}