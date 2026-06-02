import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { EncapsulatedPacket } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/packet/EncapsulatedPacket.d.ts'
export class EncapsulatedToMessageHandler extends SimpleChannelInboundHandler<EncapsulatedPacket> {
    static INSTANCE: EncapsulatedToMessageHandler;
    static NAME: string;
    constructor()
    channelRead0(arg0: ChannelHandlerContext, arg1: EncapsulatedPacket): void;
}