import type { PromiseTask } from '../../../../io/netty/util/concurrent/PromiseTask.d.ts'
import type { ScheduledFuture } from '../../../../io/netty/util/concurrent/ScheduledFuture.d.ts'
import type { Delayed } from '../../../../java/util/concurrent/Delayed.d.ts'
import type { RunnableScheduledFuture } from '../../../../java/util/concurrent/RunnableScheduledFuture.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnorderedThreadPoolEventExecutor$RunnableScheduledFutureTask<V extends unknown> extends PromiseTask<V> implements ScheduledFuture<V>, RunnableScheduledFuture<V> {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor(arg0: (Object | null)[], arg1: RunnableScheduledFuture<V>, arg2: boolean)
    // private future: RunnableScheduledFuture<V>;
    // private wasCallable: boolean;
    compareTo(arg0: Delayed): number;
    getDelay(arg0: TimeUnit): number;
    isPeriodic(): boolean;
    run(): void;
    runTask(): V;
}