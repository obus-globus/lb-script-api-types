import type { Object } from '../../java/lang/Object.d.ts'
import type { Function1 } from '../../kotlin/jvm/functions/Function1.d.ts'
import type { Function3 } from '../../kotlin/jvm/functions/Function3.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
export interface CancellableContinuation<T extends Object | number | string | boolean> extends Object, Continuation<T>{
    /*not mapped: */ isActive(): boolean;
    /*not mapped: */ isCancelled(): boolean;
    /*not mapped: */ isCompleted(): boolean;
    cancel(cause: Throwable | null): boolean;
    completeResume(token: Object): void;
    initCancellability(): void;
    invokeOnCancellation(handler: Function1<Throwable, void>): void;
    resume<R extends T>(value: R, onCancellation: Function3<Throwable, R, CoroutineContext, void> | null): void;
    resume(value: T, onCancellation: Function1<Throwable, void> | null): void;
    tryResume<R extends T>(value: R, idempotent: Object | null, onCancellation: Function3<Throwable, R, CoroutineContext, void> | null): Object | null;
    tryResume(value: T, idempotent: Object | null): Object | null;
    tryResumeWithException(exception: Throwable): Object | null;
}