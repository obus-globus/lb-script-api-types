import type { Object } from '../../../java/lang/Object.d.ts'
import type { Result } from '../../../kotlin/Result.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
import type { CoroutineContext } from '../../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CancellableContinuation } from '../../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { CancellableContinuationImpl } from '../../../kotlinx/coroutines/CancellableContinuationImpl.d.ts'
import type { Waiter } from '../../../kotlinx/coroutines/Waiter.d.ts'
import type { Segment } from '../../../kotlinx/coroutines/internal/Segment.d.ts'
export class MutexImpl$CancellableContinuationWithOwner extends Object implements CancellableContinuation<void>, Waiter {
    constructor(null_: MutexImpl$CancellableContinuationWithOwner, cont: CancellableContinuationImpl<void>, owner: Object | null)
    cont: CancellableContinuationImpl<void>;
    readonly context: CoroutineContext;
    /*not mapped: */ isActive(): boolean;
    /*not mapped: */ isCancelled(): boolean;
    /*not mapped: */ isCompleted(): boolean;
    owner: Object | null;
    cancel(cause: Throwable | null): boolean;
    completeResume(token: Object): void;
    initCancellability(): void;
    invokeOnCancellation(handler: (param0: Throwable | null) => void): void;
    invokeOnCancellation(segment: Segment<any>, index: number): void;
    resume<R extends void>(value: R, onCancellation: ((param0: Throwable, param1: R, param2: CoroutineContext) => void) | null): void;
    resume(value: void, onCancellation: ((param0: Throwable) => void) | null): void;
    resumeWith(result: Result<void>): void;
    tryResume<R extends void>(value: R, idempotent: Object | null, onCancellation: ((param0: Throwable, param1: R, param2: CoroutineContext) => void) | null): Object | null;
    tryResume(value: void, idempotent: Object | null): Object | null;
    tryResumeWithException(exception: Throwable): Object | null;
}