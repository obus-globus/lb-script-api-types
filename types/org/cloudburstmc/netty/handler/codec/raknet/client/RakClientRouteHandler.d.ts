import type { ChannelDuplexHandler } from '../../../../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { SocketAddress } from '../../../../../../../java/net/SocketAddress.d.ts'
import type { RakClientChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakClientChannel.d.ts'
export class RakClientRouteHandler extends ChannelDuplexHandler {
    static NAME: string;
    constructor(arg0: RakClientChannel)
    // private channel: RakClientChannel;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    read(arg0: ChannelHandlerContext): void;
}