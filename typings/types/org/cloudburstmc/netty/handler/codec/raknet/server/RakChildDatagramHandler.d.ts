import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandlerAdapter } from '../../../../../../../io/netty/channel/ChannelOutboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakChildChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakChildChannel.d.ts'
export class RakChildDatagramHandler extends ChannelOutboundHandlerAdapter {
    static NAME: string;
    constructor(arg0: RakChildChannel)
    // private canFlush: boolean;
    // private channel: RakChildChannel;
    flush(arg0: ChannelHandlerContext): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}