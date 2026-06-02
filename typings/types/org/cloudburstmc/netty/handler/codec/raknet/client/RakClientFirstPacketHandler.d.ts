import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandlerAdapter } from '../../../../../../../io/netty/channel/ChannelOutboundHandlerAdapter.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Promise } from '../../../../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RakClientFirstPacketHandler extends ChannelOutboundHandlerAdapter {
    static NAME: string;
    constructor(arg0: Promise<Object>)
    // private packetPromise: Promise<Object>;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}