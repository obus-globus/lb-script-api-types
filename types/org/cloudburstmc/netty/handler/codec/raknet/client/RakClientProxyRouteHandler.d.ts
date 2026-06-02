import type { ChannelDuplexHandler } from '../../../../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakClientChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakClientChannel.d.ts'
export class RakClientProxyRouteHandler extends ChannelDuplexHandler {
    static NAME: string;
    constructor(arg0: RakClientChannel)
    // private channel: RakClientChannel;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}