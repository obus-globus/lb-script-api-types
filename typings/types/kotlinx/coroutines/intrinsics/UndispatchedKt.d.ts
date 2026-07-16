import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { ScopeCoroutine } from '../../../kotlinx/coroutines/internal/ScopeCoroutine.d.ts'
export class UndispatchedKt extends Object {
    static startCoroutineUndispatched<R extends unknown, T extends unknown>(self: (param0: R) => T, receiver: R, completion: Continuation<T>): void;
    static startUndispatchedOrReturn<T extends unknown, R extends unknown>(self: ScopeCoroutine<T>, receiver: R, block: (param0: R) => T): Object | null;
    static startUndispatchedOrReturnIgnoreTimeout<T extends unknown, R extends unknown>(self: ScopeCoroutine<T>, receiver: R, block: (param0: R) => T): Object | null;
}