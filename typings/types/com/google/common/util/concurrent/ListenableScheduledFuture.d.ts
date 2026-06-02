import type { ListenableFuture } from '../../../../../com/google/common/util/concurrent/ListenableFuture.d.ts'
import type { ScheduledFuture } from '../../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ListenableScheduledFuture<V extends Object | number | string | boolean> extends ListenableFuture<V>, ScheduledFuture<V>, Object{
}