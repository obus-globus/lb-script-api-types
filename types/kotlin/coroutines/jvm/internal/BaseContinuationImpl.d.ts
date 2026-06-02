import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Result } from '../../../../kotlin/Result.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineStackFrame } from '../../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
export abstract class BaseContinuationImpl extends Object implements Serializable, Continuation<Object>, CoroutineStackFrame {
    constructor(completion: Continuation<Object> | null)
    readonly callerFrame: CoroutineStackFrame | null;
    readonly completion: Continuation<Object> | null;
    create(value: Object | null, completion: Continuation<Object>): Continuation<void>;
    create(completion: Continuation<Object>): Continuation<void>;
    getStackTraceElement(): StackTraceElement | null;
    protected invokeSuspend(result: Result<Object>): Object | null;
    protected releaseIntercepted(): void;
    resumeWith(result: Result<Object>): void;
    toString(): string;
}