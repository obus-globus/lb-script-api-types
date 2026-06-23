import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ProgressiveFuture<V extends unknown> extends Future<V>, Object{
    addListener(arg0: GenericFutureListener<Future<V>>): ProgressiveFuture<V>;
    addListeners(arg0: GenericFutureListener<Future<V>>[]): ProgressiveFuture<V>;
    await(): ProgressiveFuture<V>;
    awaitUninterruptibly(): ProgressiveFuture<V>;
    removeListener(arg0: GenericFutureListener<Future<V>>): ProgressiveFuture<V>;
    removeListeners(arg0: GenericFutureListener<Future<V>>[]): ProgressiveFuture<V>;
    sync(): ProgressiveFuture<V>;
    syncUninterruptibly(): ProgressiveFuture<V>;
}