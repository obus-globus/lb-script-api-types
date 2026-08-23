import type { AbstractBootstrap } from '../../../../../io/netty/bootstrap/AbstractBootstrap.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NettyExtensionsKt extends Object {
    /**
     * Shortcut for Netty client {@link io.netty.bootstrap.Bootstrap},
     * using shared {@link io.netty.channel.EventLoopGroup} from {@link EventLoopGroupHolder}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/utils/netty/NettyExtensions.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/netty/NettyExtensions.kt:29}
     */
    static clientChannelAndGroup<B extends AbstractBootstrap<B, Channel>>(self: AbstractBootstrap<B, Channel>, useEpoll: boolean): B;
}