import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { ProgressiveFuture } from '../../../../io/netty/util/concurrent/ProgressiveFuture.d.ts'
import type { Promise } from '../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface ProgressivePromise<V extends unknown> extends ProgressiveFuture<V>, Promise<V>, Object{
    addListener(arg0: GenericFutureListener<Future<V>>): ProgressivePromise<V>;
    addListeners(...arg0: GenericFutureListener<Future<V>>[]): ProgressivePromise<V>;
    await(): ProgressivePromise<V>;
    awaitUninterruptibly(): ProgressivePromise<V>;
    removeListener(arg0: GenericFutureListener<Future<V>>): ProgressivePromise<V>;
    removeListeners(...arg0: GenericFutureListener<Future<V>>[]): ProgressivePromise<V>;
    setFailure(arg0: Throwable): ProgressivePromise<V>;
    setProgress(arg0: number, arg1: number): ProgressivePromise<V>;
    setSuccess(arg0: V): ProgressivePromise<V>;
    sync(): ProgressivePromise<V>;
    syncUninterruptibly(): ProgressivePromise<V>;
    tryProgress(arg0: number, arg1: number): boolean;
}