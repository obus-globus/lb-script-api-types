import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ConcurrentUtils$ConstantFuture<T extends Object | number | string | boolean> extends Object implements Future<T> {
    constructor(arg0: T)
    // private value: T;
    cancel(arg0: boolean): boolean;
    exceptionNow(): Throwable;
    get(): T;
    get(arg0: number, arg1: TimeUnit): T;
    isCancelled(): boolean;
    isDone(): boolean;
    resultNow<V extends Object | number | string | boolean>(): V;
    state(): Future$State;
}