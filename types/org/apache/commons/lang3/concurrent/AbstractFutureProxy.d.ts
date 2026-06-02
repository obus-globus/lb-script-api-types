import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractFutureProxy<V extends Object | number | string | boolean> extends Object implements Future<V> {
    constructor(arg0: Future<V>)
    readonly future: Future<V>;
    cancel(arg0: boolean): boolean;
    exceptionNow(): Throwable;
    get(): V;
    get(arg0: number, arg1: TimeUnit): V;
    getFuture(): Future<V>;
    isCancelled(): boolean;
    isDone(): boolean;
    resultNow(): V;
    state(): Future$State;
}