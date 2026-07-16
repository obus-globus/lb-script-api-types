import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
import type { CoroutineScope } from '../../kotlinx/coroutines/CoroutineScope.d.ts'
import type { UndispatchedCoroutine } from '../../kotlinx/coroutines/UndispatchedCoroutine.d.ts'
export class CoroutineContextKt extends Object {
    static getCoroutineName(paramarg0: CoroutineContext): string;
    static newCoroutineContext(self: CoroutineContext, addedContext: CoroutineContext): CoroutineContext;
    static newCoroutineContext(self: CoroutineScope, context: CoroutineContext): CoroutineContext;
    static undispatchedCompletion(self: CoroutineStackFrame): UndispatchedCoroutine<Object> | null;
    static updateUndispatchedCompletion(self: Continuation<Object>, context: CoroutineContext, oldValue: Object | null): UndispatchedCoroutine<Object> | null;
    static withContinuationContext<T extends unknown>(continuation: Continuation<Object>, countOrElement: Object | null, block: () => T): T;
    static withCoroutineContext<T extends unknown>(context: CoroutineContext, countOrElement: Object | null, block: () => T): T;
}