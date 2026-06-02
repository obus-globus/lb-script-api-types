import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakSessionCodec } from '../../../../../../../org/cloudburstmc/netty/handler/codec/raknet/common/RakSessionCodec.d.ts'
export class RakAcknowledgeHandler extends SimpleChannelInboundHandler<ByteBuf> {
    static NAME: string;
    constructor(arg0: RakSessionCodec)
    // private sessionCodec: RakSessionCodec;
    acceptInboundMessage(arg0: Object): boolean;
    channelRead0(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
}