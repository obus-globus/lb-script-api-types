import type { ThreadLocal } from '../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Pair } from '../../kotlin/Pair.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { Job$Key } from '../../kotlinx/coroutines/Job$Key.d.ts'
import type { ScopeCoroutine } from '../../kotlinx/coroutines/internal/ScopeCoroutine.d.ts'
export class UndispatchedCoroutine<T extends unknown> extends ScopeCoroutine<T> {
    static Key: Job$Key;
    constructor(context: CoroutineContext, uCont: Continuation<T>)
    // private threadLocalIsSet: boolean;
    // private threadStateToRecover: ThreadLocal<Pair<CoroutineContext, Object>>;
    afterCompletionUndispatched(): void;
    protected afterResume(state: Object | null): void;
    clearThreadContext(): boolean;
    // private clearThreadLocal(): void;
    saveThreadContext(context: CoroutineContext, oldValue: Object | null): void;
}