import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { RakChildChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakChildChannel.d.ts'
import type { EncapsulatedPacket } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/packet/EncapsulatedPacket.d.ts'
export class RakServerOnlineInitialHandler extends SimpleChannelInboundHandler<EncapsulatedPacket> {
    static NAME: string;
    constructor(arg0: RakChildChannel)
    // private channel: RakChildChannel;
    channelRead0(arg0: ChannelHandlerContext, arg1: EncapsulatedPacket): void;
    // private onConnectionRequest(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    // private sendConnectionRequestAccepted(arg0: ChannelHandlerContext, arg1: number): void;
    // private sendConnectionRequestFailed(arg0: ChannelHandlerContext, arg1: number): void;
    // private sendRaw(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
}