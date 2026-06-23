import type { Future$State } from '../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export interface Future<V extends unknown> extends Object{
    cancel(arg0: boolean): boolean;
    exceptionNow(): Throwable;
    get(): V;
    get(arg0: number, arg1: TimeUnit): V;
    isCancelled(): boolean;
    isDone(): boolean;
    resultNow(): V;
    state(): Future$State;
}