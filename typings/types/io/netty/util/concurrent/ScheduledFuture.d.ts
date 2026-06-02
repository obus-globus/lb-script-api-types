import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { ScheduledFuture } from '../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ScheduledFuture<V extends Object | number | string | boolean> extends Future<V>, ScheduledFuture<V>, Object{
}