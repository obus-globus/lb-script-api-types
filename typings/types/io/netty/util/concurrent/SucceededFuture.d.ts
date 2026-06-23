import type { CompleteFuture } from '../../../../io/netty/util/concurrent/CompleteFuture.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class SucceededFuture<V extends unknown> extends CompleteFuture<V> {
    constructor(arg0: (Object | null)[], arg1: V)
    // private result: V;
    cause(): Throwable;
    getNow(): V;
    isSuccess(): boolean;
}