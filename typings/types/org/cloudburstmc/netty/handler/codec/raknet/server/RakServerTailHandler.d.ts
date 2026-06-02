import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class RakServerTailHandler extends ChannelInboundHandlerAdapter {
    static INSTANCE: RakServerTailHandler;
    static NAME: string;
    constructor()
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
}