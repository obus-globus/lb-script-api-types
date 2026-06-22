import type { RunnableFuture } from '../../../java/util/concurrent/RunnableFuture.d.ts'
import type { ScheduledFuture } from '../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface RunnableScheduledFuture<V extends Object | number | string | boolean> extends RunnableFuture<V>, ScheduledFuture<V>, Object{
    getDelay(arg0: TimeUnit): number;
    isPeriodic(): boolean;
    run(): void;
}