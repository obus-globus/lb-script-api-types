import type { CancellableContinuation } from '../../kotlinx/coroutines/CancellableContinuation.d.ts'
import type { EventLoopImplBase$DelayedTask } from '../../kotlinx/coroutines/EventLoopImplBase$DelayedTask.d.ts'
export class EventLoopImplBase$DelayedResumeTask extends EventLoopImplBase$DelayedTask {
    constructor(null_: EventLoopImplBase$DelayedResumeTask, nanoTime: number, cont: CancellableContinuation<void>)
    // private cont: CancellableContinuation<void>;
    run(): void;
    toString(): string;
}