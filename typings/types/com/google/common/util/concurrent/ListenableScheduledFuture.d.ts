import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { ScheduledFuture } from '../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ListenableScheduledFuture<V extends unknown> extends ListenableFuture<V>, ScheduledFuture<V>, Object{
    getDelay(arg0: TimeUnit): number;
}