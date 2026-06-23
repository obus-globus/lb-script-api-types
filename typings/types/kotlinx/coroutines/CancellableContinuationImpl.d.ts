import type { StackTraceElement } from '../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Result } from '../../kotlin/Result.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { CoroutineStackFrame } from '../../kotlin/coroutines/jvm/internal/CoroutineStackFrame.d.ts'
import type { AtomicInt } from '../../kotlinx/atomicfu/AtomicInt.d.ts'
import type { CancelHandler } from '../../kotlinx/coroutines/CancelHandler.d.ts'
import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { DispatchedTask } from '../../kotlinx/coroutines/DispatchedTask.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { Job } from '../../kotlinx/coroutines/Job.d.ts'
import type { NotCompleted } from '../../kotlinx/coroutines/NotCompleted.d.ts'
import type { Waiter } from '../../kotlinx/coroutines/Waiter.d.ts'
import type { Segment } from '../../kotlinx/coroutines/internal/Segment.d.ts'
import type { Symbol } from '../../kotlinx/coroutines/internal/Symbol.d.ts'
export class CancellableContinuationImpl<T extends Object | number | string | boolean> extends DispatchedTask<T> implements CoroutineStackFrame, CancellableContinuation<T>, Waiter {
    constructor(delegate: Continuation<T>, resumeMode: number)
    // private alreadyResumedError(proposedUpdate: Object | null): void;
    callCancelHandler(handler: CancelHandler, cause: Throwable | null): void;
    // private callCancelHandlerSafely(block: () => void): void;
    callOnCancellation<R extends Object | number | string | boolean>(onCancellation: (param0: Throwable, param1: R, param2: CoroutineContext) => void, cause: Throwable, value: R): void;
    // private callSegmentOnCancellation(segment: Segment<any>, cause: Throwable | null): void;
    cancel(cause: Throwable | null): boolean;
    cancelCompletedResult(takenState: Object | null, cause: Throwable): void;
    // private cancelLater(cause: Throwable): boolean;
    completeResume(token: Object): void;
    detachChild(): void;
    // private detachChildIfNonReusable(): void;
    // private dispatchResume(mode: number): void;
    getContinuationCancellationCause(parent: Job): Throwable;
    getExceptionalResult(state: Object | null): Throwable | null;
    getResult(): Object | null;
    getStackTraceElement(): StackTraceElement | null;
    getSuccessfulResult(state: Object | null): T;
    initCancellability(): void;
    // private installParentHandle(): DisposableHandle | null;
    invokeOnCancellation(handler: (param0: Throwable | null) => void): void;
    invokeOnCancellation(segment: Segment<any>, index: number): void;
    // private invokeOnCancellationImpl(handler: Object): void;
    invokeOnCancellationInternal(handler: CancelHandler): void;
    // private isReusable(): boolean;
    // private multipleHandlersError(handler: Object, state: Object | null): void;
    protected nameString(): string;
    parentCancelled(cause: Throwable): void;
    releaseClaimedReusableContinuation(): void;
    resetStateReusable(): boolean;
    resume<R extends T>(value: R, onCancellation: ((param0: Throwable, param1: R, param2: CoroutineContext) => void) | null): void;
    resume(value: T, onCancellation: ((param0: Throwable) => void) | null): void;
    resumeImpl<R extends Object | number | string | boolean>(proposedUpdate: R, resumeMode: number, onCancellation: ((param0: Throwable, param1: R, param2: CoroutineContext) => void) | null): void;
    resumeWith(result: Result<T>): void;
    // private resumedState<R extends Object | number | string | boolean>(state: NotCompleted, proposedUpdate: R, resumeMode: number, onCancellation: ((param0: Throwable, param1: R, param2: CoroutineContext) => void) | null, idempotent: Object | null): Object | null;
    takeState(): Object | null;
    toString(): string;
    // private tryResume(): boolean;
    tryResume<R extends T>(value: R, idempotent: Object | null, onCancellation: ((param0: Throwable, param1: R, param2: CoroutineContext) => void) | null): Object | null;
    tryResume(value: T, idempotent: Object | null): Object | null;
    // private tryResumeImpl<R extends Object | number | string | boolean>(proposedUpdate: R, idempotent: Object | null, onCancellation: ((param0: Throwable, param1: R, param2: CoroutineContext) => void) | null): Symbol | null;
    tryResumeWithException(exception: Throwable): Object | null;
    // private trySuspend(): boolean;
}