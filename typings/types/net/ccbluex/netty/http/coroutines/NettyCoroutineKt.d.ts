import type { Future } from '../../../../../io/netty/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NettyCoroutineKt extends Object {
    static awaitSuspend<F extends Future<Object>>(self: F): F;
    static syncSuspend<F extends Future<V>>(self: F): F;
}