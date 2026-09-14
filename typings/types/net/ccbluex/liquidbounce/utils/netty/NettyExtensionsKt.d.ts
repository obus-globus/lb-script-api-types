import type { AbstractBootstrap } from '../../../../../io/netty/bootstrap/AbstractBootstrap.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NettyExtensionsKt extends Object {
    /**
     * Shortcut for Netty client {@link io.netty.bootstrap.Bootstrap},
     * using shared {@link io.netty.channel.EventLoopGroup} from {@link EventLoopGroupHolder}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/netty/NettyExtensions.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/netty/NettyExtensions.kt:29}
     */
    static clientChannelAndGroup<B extends AbstractBootstrap<B, Channel>>(self: AbstractBootstrap<B, Channel>, useEpoll: boolean): B;
}