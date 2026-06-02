import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { DatagramPacket } from '../../../../../../../io/netty/channel/socket/DatagramPacket.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakClientChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakClientChannel.d.ts'
import type { AdvancedChannelInboundHandler } from '../../../../../../../org/cloudburstmc/netty/handler/codec/raknet/AdvancedChannelInboundHandler.d.ts'
export class UnconnectedPongDecoder extends AdvancedChannelInboundHandler<DatagramPacket> {
    static NAME: string;
    constructor(arg0: RakClientChannel)
    // private channel: RakClientChannel;
    acceptInboundMessage(arg0: ChannelHandlerContext, arg1: Object): boolean;
    channelRead0(arg0: ChannelHandlerContext, arg1: DatagramPacket): void;
}