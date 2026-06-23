import type { StackTraceElement } from '../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
import type { AbstractCoroutine } from '../../../kotlinx/coroutines/AbstractCoroutine.d.ts'
import type { Job$Key } from '../../../kotlinx/coroutines/Job$Key.d.ts'
export class ScopeCoroutine<T extends unknown> extends AbstractCoroutine<T> implements CoroutineStackFrame {
    static Key: Job$Key;
    constructor(context: CoroutineContext, uCont: Continuation<T>)
    readonly callerFrame: CoroutineStackFrame | null;
    // private /*not mapped: */ isScopedCoroutine(): boolean;
    uCont: Continuation<T>;
    protected afterCompletion(state: Object | null): void;
    afterCompletionUndispatched(): void;
    protected afterResume(state: Object | null): void;
    getStackTraceElement(): StackTraceElement | null;
}