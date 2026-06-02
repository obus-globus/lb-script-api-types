import type { PromiseTask } from '../../../../io/netty/util/concurrent/PromiseTask.d.ts'
import type { ScheduledFuture } from '../../../../io/netty/util/concurrent/ScheduledFuture.d.ts'
import type { PriorityQueueNode } from '../../../../io/netty/util/internal/PriorityQueueNode.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Delayed } from '../../../../java/util/concurrent/Delayed.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ScheduledFutureTask<V extends Object | number | string | boolean> extends PromiseTask<V> implements ScheduledFuture<V>, PriorityQueueNode {
    static INDEX_NOT_IN_QUEUE: number;
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor(arg0: (Object | null)[], arg1: () => void, arg2: number)
    constructor(arg0: (Object | null)[], arg1: () => void, arg2: number, arg3: number)
    constructor(arg0: (Object | null)[], arg1: () => V, arg2: number)
    constructor(arg0: (Object | null)[], arg1: () => V, arg2: number, arg3: number)
    // private deadlineNanos: number;
    // private id: number;
    // private periodNanos: number;
    // private queueIndex: number;
    cancel(arg0: boolean): boolean;
    cancelWithoutRemove(arg0: boolean): boolean;
    compareTo(arg0: Delayed): number;
    deadlineNanos(): number;
    delayNanos(): number;
    delayNanos(arg0: number): number;
    executor(): (Object | null)[];
    getDelay(arg0: TimeUnit): number;
    getId(): number;
    priorityQueueIndex(arg0: (Object | null)[]): number;
    priorityQueueIndex(arg0: (Object | null)[], arg1: number): void;
    run(): void;
    // private scheduledExecutor(): (Object | null)[];
    setConsumed(): void;
    setId(arg0: number): ScheduledFutureTask<V>;
    toStringBuilder(): StringBuilder;
}