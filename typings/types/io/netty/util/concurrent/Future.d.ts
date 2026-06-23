import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Future as Future_2 } from '../../../../java/util/concurrent/Future.d.ts'
import type { Future$State } from '../../../../java/util/concurrent/Future$State.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface Future<V extends unknown> extends Future_2<V>, Object{
    addListener(arg0: GenericFutureListener<Future<V>>): Future<V>;
    addListeners(arg0: GenericFutureListener<Future<V>>[]): Future<V>;
    await(): Future<V>;
    await(arg0: number): boolean;
    await(arg0: number, arg1: TimeUnit): boolean;
    awaitUninterruptibly(): Future<V>;
    awaitUninterruptibly(arg0: number): boolean;
    awaitUninterruptibly(arg0: number, arg1: TimeUnit): boolean;
    cancel(arg0: boolean): boolean;
    cause(): Throwable;
    exceptionNow(): Throwable;
    getNow(): V;
    isCancellable(): boolean;
    isSuccess(): boolean;
    removeListener(arg0: GenericFutureListener<Future<V>>): Future<V>;
    removeListeners(arg0: GenericFutureListener<Future<V>>[]): Future<V>;
    resultNow(): V;
    state(): Future$State;
    sync(): Future<V>;
    syncUninterruptibly(): Future<V>;
}