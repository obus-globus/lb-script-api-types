import type { AbstractFuture } from '../../../../io/netty/util/concurrent/AbstractFuture.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class CompleteFuture<V extends unknown> extends AbstractFuture<V> {
    constructor(arg0: (Object | null)[])
    // private executor: (Object | null)[];
    addListener(arg0: GenericFutureListener<Future<V>>): Future<V>;
    addListeners(...arg0: GenericFutureListener<Future<V>>[]): Future<V>;
    await(): Future<V>;
    await(arg0: number): boolean;
    await(arg0: number, arg1: TimeUnit): boolean;
    awaitUninterruptibly(): Future<V>;
    awaitUninterruptibly(arg0: number): boolean;
    awaitUninterruptibly(arg0: number, arg1: TimeUnit): boolean;
    cancel(arg0: boolean): boolean;
    executor(): (Object | null)[];
    isCancellable(): boolean;
    isCancelled(): boolean;
    isDone(): boolean;
    removeListener(arg0: GenericFutureListener<Future<V>>): Future<V>;
    removeListeners(...arg0: GenericFutureListener<Future<V>>[]): Future<V>;
    sync(): Future<V>;
    syncUninterruptibly(): Future<V>;
}