import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelInboundHandlerAdapter } from '../../../../../io/netty/channel/ChannelInboundHandlerAdapter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NettyHttp2ConnectionSink extends ChannelInboundHandlerAdapter {
    static INSTANCE: NettyHttp2ConnectionSink;
    channelRead(ctx: ChannelHandlerContext, msg: Object): void;
}