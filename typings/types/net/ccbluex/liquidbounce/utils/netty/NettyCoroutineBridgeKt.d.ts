import type { Future } from '../../../../../io/netty/util/concurrent/Future.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NettyCoroutineBridgeKt extends Object {
    /**
     * Suspend until this Netty Future completes.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/utils/netty/NettyCoroutineBridge.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/utils/netty/NettyCoroutineBridge.kt:48}
     */
    static awaitSuspend<F extends Future<Object>>(self: F): F;
    /**
     * Suspend until this Netty Future completes,
     * and rethrows the cause of the failure if this future failed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4deffb5fa5035b9f495cc60720959e5e40d21400/src/main/kotlin/net/ccbluex/liquidbounce/utils/netty/NettyCoroutineBridge.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/utils/netty/NettyCoroutineBridge.kt:33}
     */
    static syncSuspend<F extends Future<V>>(self: F): F;
}