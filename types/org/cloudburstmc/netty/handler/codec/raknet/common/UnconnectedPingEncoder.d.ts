import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandlerAdapter } from '../../../../../../../io/netty/channel/ChannelOutboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakClientChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakClientChannel.d.ts'
export class UnconnectedPingEncoder extends ChannelOutboundHandlerAdapter {
    static NAME: string;
    constructor(arg0: RakClientChannel)
    // private channel: RakClientChannel;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}