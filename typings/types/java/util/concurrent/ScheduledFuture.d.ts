import type { Delayed } from '../../../java/util/concurrent/Delayed.d.ts'
import type { Future } from '../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface ScheduledFuture<V extends unknown> extends Delayed, Future<V>, Object{
    exceptionNow(): Throwable;
    getDelay(arg0: TimeUnit): number;
    resultNow(): V;
    state(): Future$State;
}