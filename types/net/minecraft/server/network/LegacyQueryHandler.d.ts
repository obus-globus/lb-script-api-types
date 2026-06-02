import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ServerInfo } from '../../../../net/minecraft/server/ServerInfo.d.ts'
export class LegacyQueryHandler extends ChannelInboundHandlerAdapter {
    constructor(server: ServerInfo)
    // private server: ServerInfo;
    channelRead(ctx: ChannelHandlerContext, msg: Object): void;
}