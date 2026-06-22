import type { ScheduledFuture } from '../../../../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ListenableFuture } from '../../../../../../../../org/spongepowered/include/com/google/common/util/concurrent/ListenableFuture.d.ts'
export interface ListenableScheduledFuture<V extends Object | number | string | boolean> extends ScheduledFuture<V>, Object, ListenableFuture<V>{
    getDelay(arg0: TimeUnit): number;
}