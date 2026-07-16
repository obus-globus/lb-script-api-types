import type { Thread } from '../../java/lang/Thread.d.ts'
import type { ContinuationInterceptor$Key } from '../../kotlin/coroutines/ContinuationInterceptor$Key.d.ts'
import type { EventLoop } from '../../kotlinx/coroutines/EventLoop.d.ts'
import type { EventLoopImplBase$DelayedTask } from '../../kotlinx/coroutines/EventLoopImplBase$DelayedTask.d.ts'
export abstract class EventLoopImplPlatform extends EventLoop {
    static Key: ContinuationInterceptor$Key;
    constructor()
    // private /*not mapped: */ getThread(): Thread;
    protected reschedule(now: number, delayedTask: EventLoopImplBase$DelayedTask): void;
    protected unpark(): void;
}