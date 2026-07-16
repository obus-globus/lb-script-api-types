import type { Object } from '../../java/lang/Object.d.ts'
import type { Result } from '../../kotlin/Result.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
export class CompletionStateKt extends Object {
    static recoverResult<T extends unknown>(state: Object | null, uCont: Continuation<T>): Result<T>;
    static toState<T extends unknown>(self: Result<T>): Object | null;
    static toState<T extends unknown>(self: Result<T>, caller: CancellableContinuation<Object>): Object | null;
}