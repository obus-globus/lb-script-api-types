import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { ScheduledFuture as ScheduledFuture_2 } from '../../../../java/util/concurrent/ScheduledFuture.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ScheduledFuture<V extends unknown> extends Future<V>, ScheduledFuture_2<V>, Object{
    getDelay(arg0: TimeUnit): number;
}