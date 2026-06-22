import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Comparable } from '../../java/lang/Comparable.d.ts'
import type { DisposableHandle } from '../../kotlinx/coroutines/DisposableHandle.d.ts'
import type { EventLoopImplBase } from '../../kotlinx/coroutines/EventLoopImplBase.d.ts'
import type { EventLoopImplBase$DelayedTaskQueue } from '../../kotlinx/coroutines/EventLoopImplBase$DelayedTaskQueue.d.ts'
import type { ThreadSafeHeap } from '../../kotlinx/coroutines/internal/ThreadSafeHeap.d.ts'
import type { ThreadSafeHeapNode } from '../../kotlinx/coroutines/internal/ThreadSafeHeapNode.d.ts'
export abstract class EventLoopImplBase$DelayedTask extends Object implements Runnable, Comparable<EventLoopImplBase$DelayedTask>, DisposableHandle, ThreadSafeHeapNode {
    constructor(nanoTime: number)
    // private _heap: Object | null;
    heap: ThreadSafeHeap<Object> | null;
    index: number;
    nanoTime: number;
    compareTo(other: EventLoopImplBase$DelayedTask): number;
    dispose(): void;
    run(): void;
    scheduleTask(now: number, delayed: EventLoopImplBase$DelayedTaskQueue, eventLoop: EventLoopImplBase): number;
    timeToExecute(now: number): boolean;
    toString(): string;
}