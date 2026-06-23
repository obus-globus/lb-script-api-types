import type { CompleteFuture } from '../../../../io/netty/util/concurrent/CompleteFuture.d.ts'
import type { Future } from '../../../../io/netty/util/concurrent/Future.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class FailedFuture<V extends unknown> extends CompleteFuture<V> {
    constructor(arg0: (Object | null)[], arg1: Throwable)
    // private cause: Throwable;
    cause(): Throwable;
    getNow(): V;
    isSuccess(): boolean;
    sync(): Future<V>;
    syncUninterruptibly(): Future<V>;
}