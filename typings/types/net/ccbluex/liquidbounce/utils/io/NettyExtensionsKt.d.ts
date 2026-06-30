import type { AbstractBootstrap } from '../../../../../io/netty/bootstrap/AbstractBootstrap.d.ts'
import type { Channel } from '../../../../../io/netty/channel/Channel.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NettyExtensionsKt extends Object {
    /**
     * Shortcut for Netty client {@link io.netty.bootstrap.Bootstrap},
     * using shared {@link io.netty.channel.EventLoopGroup} from {@link EventLoopGroupHolder}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/utils/io/NettyExtensions.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/io/NettyExtensions.kt:29}
     */
    static clientChannelAndGroup(abstractBootstrap: AbstractBootstrap<any, Channel>, useEpoll: boolean): Object | null;
}