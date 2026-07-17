import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { ContinuationImpl } from '../../../../kotlin/coroutines/jvm/internal/ContinuationImpl.d.ts'
import type { CoroutineStackFrame } from '../../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
import type { FlowCollector } from '../../../../kotlinx/coroutines/flow/FlowCollector.d.ts'
import type { DownstreamExceptionContext } from '../../../../kotlinx/coroutines/flow/internal/DownstreamExceptionContext.d.ts'
export class SafeCollector<T extends unknown> extends ContinuationImpl implements CoroutineStackFrame, FlowCollector<T> {
    constructor(collector: FlowCollector<T>, collectContext: CoroutineContext)
    readonly callerFrame: CoroutineStackFrame | null;
    collectContext: CoroutineContext;
    collectContextSize: number;
    collector: FlowCollector<T>;
    // private completion_: Continuation<void> | null;
    readonly context: CoroutineContext;
    // private lastEmissionContext: CoroutineContext | null;
    // private checkContext(currentContext: CoroutineContext, previousContext: CoroutineContext | null, value: T): void;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    emit(value: T, $completion: Continuation<void>): any;
    // private emit(uCont: Continuation<void>, value: T): Object | null;
    // private exceptionTransparencyViolated(exception: DownstreamExceptionContext, value: Object | null): void;
    getStackTraceElement(): StackTraceElement | null;
    protected invokeSuspend(result: Result<Object>): Object;
    releaseIntercepted(): void;
}