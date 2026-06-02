import type { StackTraceElement } from '../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Result } from '../../kotlin/Result.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
export class SafeContinuation<T extends Object | number | string | boolean> extends Object implements Continuation<T>, CoroutineStackFrame {
    constructor(delegate: Continuation<T>)
    constructor(delegate: Continuation<T>, initialResult: Object | null)
    readonly callerFrame: CoroutineStackFrame | null;
    readonly context: CoroutineContext;
    // private delegate: Continuation<T>;
    // private result: Object | null;
    getOrThrow(): Object | null;
    getStackTraceElement(): StackTraceElement | null;
    resumeWith(result: Result<T>): void;
    toString(): string;
}