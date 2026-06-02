import type { ChannelDuplexHandler } from '../../../../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakServerChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakServerChannel.d.ts'
export class RakServerRouteHandler extends ChannelDuplexHandler {
    static NAME: string;
    constructor(arg0: RakServerChannel)
    // private parent: RakServerChannel;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
}