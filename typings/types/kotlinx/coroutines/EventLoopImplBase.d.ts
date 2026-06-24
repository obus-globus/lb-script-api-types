import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Continuation } from '../../kotlin/coroutines/Continuation.d.ts'
import type { ContinuationInterceptor$Key } from '../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { CoroutineContext } from '../../kotlin/coroutines/CoroutineContext.d.ts'
import type { AtomicRef } from '../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { CoroutineDispatcher$Key } from '../../kotlinx/coroutines/CoroutineDispatcher$Key.d.ts'
import type { Delay } from '../../kotlinx/coroutines/Delay.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { EventLoopImplBase$DelayedTask } from '../../kotlinx/coroutines/EventLoopImplBase$DelayedTask.d.ts'
import type { EventLoopImplBase$DelayedTaskQueue } from '../../kotlinx/coroutines/EventLoopImplBase$DelayedTaskQueue.d.ts'
import type { EventLoopImplPlatform } from '../../kotlinx/coroutines/EventLoopImplPlatform.d.ts'
export abstract class EventLoopImplBase extends EventLoopImplPlatform implements Delay {
    static Key: ContinuationInterceptor$Key;
    static Key: CoroutineDispatcher$Key;
    static delay$suspendImpl(paramarg0: Delay, paramarg1: number, paramarg2: Continuation<Object>): Object;
    constructor()
    // private closeQueue(): void;
    delay(time: number): void;
    // private dequeue(): (() => void) | null;
    dispatch(context: CoroutineContext, block: () => void): void;
    enqueue(task: () => void): void;
    // private enqueueDelayedTasks(): void;
    // private enqueueImpl(task: () => void): boolean;
    invokeOnTimeout(timeMillis: number, block: () => void, context: CoroutineContext): DisposableHandle;
    processNextEvent(): number;
    // private rescheduleAllDelayed(): void;
    protected resetAll(): void;
    schedule(now: number, delayedTask: EventLoopImplBase$DelayedTask): void;
    // private scheduleImpl(now: number, delayedTask: EventLoopImplBase$DelayedTask): number;
    protected scheduleInvokeOnTimeout(timeMillis: number, block: () => void): DisposableHandle;
    scheduleResumeAfterDelay(timeMillis: number, continuation: CancellableContinuation<void>): void;
    // private shouldUnpark(task: EventLoopImplBase$DelayedTask): boolean;
    shutdown(): void;
}