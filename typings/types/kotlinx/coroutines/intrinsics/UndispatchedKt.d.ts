import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { ScopeCoroutine } from '../../../kotlinx/coroutines/internal/ScopeCoroutine.d.ts'
export class UndispatchedKt extends Object {
    static startCoroutineUndispatched(paramarg0: (param0: Object | null, param1: Object | null) => Object | null, paramarg1: Object | null, paramarg2: Continuation<Object>): void;
    static startUndispatchedOrReturn(paramarg0: ScopeCoroutine<Object>, paramarg1: Object | null, paramarg2: (param0: Object | null, param1: Object | null) => Object | null): Object;
    static startUndispatchedOrReturnIgnoreTimeout(paramarg0: ScopeCoroutine<Object>, paramarg1: Object | null, paramarg2: (param0: Object | null, param1: Object | null) => Object | null): Object;
}