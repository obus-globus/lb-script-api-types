import type { DefaultPromise } from '../../../../io/netty/util/concurrent/DefaultPromise.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { ProgressivePromise } from '../../../../io/netty/util/concurrent/ProgressivePromise.d.ts'
import type { TimeUnit } from '../../../../java/util/concurrent/TimeUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class DefaultProgressivePromise<V extends unknown> extends DefaultPromise<V> implements ProgressivePromise<V> {
    static PROPERTY_MAX_LISTENER_STACK_DEPTH: string;
    constructor()
    constructor(arg0: (Object | null)[])
    addListener(arg0: GenericFutureListener<Future<V>>): ProgressivePromise<V>;
    addListeners(...arg0: GenericFutureListener<Future<V>>[]): ProgressivePromise<V>;
    await(): ProgressivePromise<V>;
    await(arg0: number): boolean;
    await(arg0: number, arg1: TimeUnit): boolean;
    awaitUninterruptibly(): ProgressivePromise<V>;
    awaitUninterruptibly(arg0: number): boolean;
    awaitUninterruptibly(arg0: number, arg1: TimeUnit): boolean;
    removeListener(arg0: GenericFutureListener<Future<V>>): ProgressivePromise<V>;
    removeListeners(...arg0: GenericFutureListener<Future<V>>[]): ProgressivePromise<V>;
    setFailure(arg0: Throwable): ProgressivePromise<V>;
    setProgress(arg0: number, arg1: number): ProgressivePromise<V>;
    setSuccess(arg0: V): ProgressivePromise<V>;
    sync(): ProgressivePromise<V>;
    syncUninterruptibly(): ProgressivePromise<V>;
    tryProgress(arg0: number, arg1: number): boolean;
}