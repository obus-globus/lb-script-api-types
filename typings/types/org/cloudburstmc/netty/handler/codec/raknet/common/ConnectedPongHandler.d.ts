import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EncapsulatedPacket } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/packet/EncapsulatedPacket.d.ts'
import type { AdvancedChannelInboundHandler } from '../../../../../../../org/cloudburstmc/netty/handler/codec/raknet/AdvancedChannelInboundHandler.d.ts'
import type { RakSessionCodec } from '../../../../../../../org/cloudburstmc/netty/handler/codec/raknet/common/RakSessionCodec.d.ts'
export class ConnectedPongHandler extends AdvancedChannelInboundHandler<EncapsulatedPacket> {
    static NAME: string;
    constructor(arg0: RakSessionCodec)
    // private sessionCodec: RakSessionCodec;
    acceptInboundMessage(arg0: ChannelHandlerContext, arg1: Object): boolean;
    channelRead0(arg0: ChannelHandlerContext, arg1: EncapsulatedPacket): void;
}