import type { AbstractBootstrap } from '../../../../../io/netty/bootstrap/AbstractBootstrap.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NettyExtensionsKt extends Object {
    /**
     * Shortcut for Netty client {@link io.netty.bootstrap.Bootstrap},
     * using shared {@link io.netty.channel.EventLoopGroup} from {@link EventLoopGroupHolder}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/NettyExtensions.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/NettyExtensions.kt:29}
     */
    static clientChannelAndGroup(abstractBootstrap: AbstractBootstrap<any, Channel>, useEpoll: boolean): Object | null;
}