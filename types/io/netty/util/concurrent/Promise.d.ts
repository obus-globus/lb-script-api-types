import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { GenericFutureListener } from '../../../../io/netty/util/concurrent/GenericFutureListener.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export interface Promise<V extends Object | number | string | boolean> extends Future<V>, Object{
    addListener(arg0: GenericFutureListener<Future<V>>): Promise<V>;
    addListeners(arg0: GenericFutureListener<Future<V>>[]): Promise<V>;
    await(): Promise<V>;
    awaitUninterruptibly(): Promise<V>;
    removeListener(arg0: GenericFutureListener<Future<V>>): Promise<V>;
    removeListeners(arg0: GenericFutureListener<Future<V>>[]): Promise<V>;
    setFailure(arg0: Throwable): Promise<V>;
    setSuccess(arg0: V): Promise<V>;
    setUncancellable(): boolean;
    sync(): Promise<V>;
    syncUninterruptibly(): Promise<V>;
    tryFailure(arg0: Throwable): boolean;
    trySuccess(arg0: V): boolean;
}