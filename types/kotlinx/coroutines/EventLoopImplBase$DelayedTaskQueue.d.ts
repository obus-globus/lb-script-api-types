import type { EventLoopImplBase$DelayedTask } from '../../kotlinx/coroutines/EventLoopImplBase$DelayedTask.d.ts'
import type { ThreadSafeHeap } from '../../kotlinx/coroutines/internal/ThreadSafeHeap.d.ts'
export class EventLoopImplBase$DelayedTaskQueue extends ThreadSafeHeap<EventLoopImplBase$DelayedTask> {
    constructor(timeNow: number)
    timeNow: number;
}