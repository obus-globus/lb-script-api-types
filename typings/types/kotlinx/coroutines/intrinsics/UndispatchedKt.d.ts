import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function2 } from '../../../kotlin/jvm/functions/Function2.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { ScopeCoroutine } from '../../../kotlinx/coroutines/internal/ScopeCoroutine.d.ts'
export class UndispatchedKt extends Object {
    static startCoroutineUndispatched(paramarg0: Function2<Object, Object, Object>, paramarg1: Object | null, paramarg2: Continuation<Object>): void;
    static startUndispatchedOrReturn(paramarg0: ScopeCoroutine<Object>, paramarg1: Object | null, paramarg2: Function2<Object, Object, Object>): Object;
    static startUndispatchedOrReturnIgnoreTimeout(paramarg0: ScopeCoroutine<Object>, paramarg1: Object | null, paramarg2: Function2<Object, Object, Object>): Object;
}