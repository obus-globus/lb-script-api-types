import type { Object } from '../../java/lang/Object.d.ts'
import type { Throwable } from '../../java/lang/Throwable.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { DispatchedTask } from '../../kotlinx/coroutines/DispatchedTask.d.ts'
import type { EventLoop } from '../../kotlinx/coroutines/EventLoop.d.ts'
export class DispatchedTaskKt extends Object {
    static MODE_ATOMIC: number;
    static MODE_CANCELLABLE: number;
    static MODE_CANCELLABLE_REUSABLE: number;
    static MODE_UNDISPATCHED: number;
    static MODE_UNINITIALIZED: number;
    static dispatch(paramarg0: DispatchedTask<Object>, paramarg1: number): void;
    static isCancellableMode(paramarg0: number): boolean;
    static isReusableMode(paramarg0: number): boolean;
    static resume(paramarg0: DispatchedTask<Object>, paramarg1: Continuation<Object>, paramarg2: boolean): void;
    static resumeWithStackTrace(paramarg0: Continuation<Object>, paramarg1: Throwable): void;
    static runUnconfinedEventLoop(paramarg0: DispatchedTask<Object>, paramarg1: EventLoop, paramarg2: () => void): void;
}