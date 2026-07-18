import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
export class StackWalkingFailedFrame extends Object implements Continuation<void>, CoroutineStackFrame {
    static INSTANCE: StackWalkingFailedFrame;
    readonly callerFrame: CoroutineStackFrame | null;
    readonly context: CoroutineContext;
    getStackTraceElement(): StackTraceElement;
    resumeWith(result: Result<void>): void;
}