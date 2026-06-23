import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CancelHandler } from '../../kotlinx/coroutines/CancelHandler.d.ts'
import type { CancellableContinuationImpl } from '../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
export class CompletedContinuation<R extends unknown> extends Object {
    constructor(result: R, cancelHandler: CancelHandler | null, onCancellation: ((param0: Throwable, param1: R, param2: CoroutineContext) => void) | null, idempotentResume: Object | null, cancelCause: Throwable | null)
    cancelCause: Throwable | null;
    cancelHandler: CancelHandler | null;
    readonly cancelled: boolean;
    idempotentResume: Object | null;
    onCancellation: ((param0: Throwable, param1: R, param2: CoroutineContext) => void) | null;
    result: R;
    component1(): R;
    component2(): CancelHandler | null;
    component3(): ((param0: Throwable, param1: R, param2: CoroutineContext) => void) | null;
    component4(): Object | null;
    component5(): Throwable | null;
    copy(result: R, cancelHandler: CancelHandler | null, onCancellation: ((param0: Throwable, param1: R, param2: CoroutineContext) => void) | null, idempotentResume: Object | null, cancelCause: Throwable | null): CompletedContinuation<R>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    invokeHandlers(cont: CancellableContinuationImpl<Object>, cause: Throwable): void;
    toString(): string;
}