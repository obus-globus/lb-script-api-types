import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
export class StackFrameContinuation<T extends unknown> extends Object implements Continuation<T>, CoroutineStackFrame {
    constructor(uCont: Continuation<T>, context: CoroutineContext)
    readonly callerFrame: CoroutineStackFrame | null;
    readonly context: CoroutineContext;
    // private uCont: Continuation<T>;
    getStackTraceElement(): StackTraceElement | null;
    resumeWith(result: Result<T>): void;
}