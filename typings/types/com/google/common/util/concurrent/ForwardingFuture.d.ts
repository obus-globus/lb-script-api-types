import type { ForwardingObject } from '../../../../../com/google/common/collect/ForwardingObject.d.ts'
import type { Future } from '../../../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class ForwardingFuture<V extends unknown> extends ForwardingObject implements Future<V> {
    constructor()
    cancel(mayInterruptIfRunning: boolean): boolean;
    delegate(): Future<V>;
    exceptionNow(): Throwable;
    get(): V;
    get(timeout: number, unit: TimeUnit): V;
    isCancelled(): boolean;
    isDone(): boolean;
    resultNow(): V;
    state(): Future$State;
}