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
    static dispatch<T extends unknown>(self: DispatchedTask<T>, mode: number): void;
    static isCancellableMode(paramarg0: number): boolean;
    static isReusableMode(paramarg0: number): boolean;
    static resume<T extends unknown>(self: DispatchedTask<T>, delegate: Continuation<T>, undispatched: boolean): void;
    static resumeWithStackTrace(self: Continuation<Object>, exception: Throwable): void;
    static runUnconfinedEventLoop(self: DispatchedTask<Object>, eventLoop: EventLoop, block: () => void): void;
}