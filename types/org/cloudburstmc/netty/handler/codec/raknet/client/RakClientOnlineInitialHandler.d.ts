import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { RakChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakChannel.d.ts'
import type { EncapsulatedPacket } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/packet/EncapsulatedPacket.d.ts'
export class RakClientOnlineInitialHandler extends SimpleChannelInboundHandler<EncapsulatedPacket> {
    static NAME: string;
    constructor(arg0: RakChannel, arg1: ChannelPromise)
    // private rakChannel: RakChannel;
    // private successPromise: ChannelPromise;
    channelActive(arg0: ChannelHandlerContext): void;
    channelRead0(arg0: ChannelHandlerContext, arg1: EncapsulatedPacket): void;
    onConnectionRequestAccepted(arg0: ChannelHandlerContext, arg1: ByteBuf): void;
    onSuccess(arg0: ChannelHandlerContext): void;
    rakChannel(): RakChannel;
    sendConnectionRequest(arg0: ChannelHandlerContext): void;
    successPromise(): ChannelPromise;
    writeIncomingConnection(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: number): void;
}