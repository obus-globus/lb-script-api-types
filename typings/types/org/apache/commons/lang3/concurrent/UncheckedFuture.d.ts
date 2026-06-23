import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export interface UncheckedFuture<V extends unknown> extends Future<V>, Object{
    exceptionNow(): Throwable;
    get(): V;
    get(arg0: number, arg1: TimeUnit): V;
    resultNow(): V;
    state(): Future$State;
}