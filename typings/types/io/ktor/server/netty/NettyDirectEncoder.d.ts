import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { MessageToByteEncoder } from '../../../../io/netty/handler/codec/MessageToByteEncoder.d.ts'
import type { HttpContent } from '../../../../io/netty/handler/codec/http/HttpContent.d.ts'
export class NettyDirectEncoder extends MessageToByteEncoder<HttpContent> {
    constructor()
    protected allocateBuffer(ctx: ChannelHandlerContext, msg: HttpContent | null, preferDirect: boolean): ByteBuf;
    protected encode(ctx: ChannelHandlerContext, msg: HttpContent, out: ByteBuf): void;
}