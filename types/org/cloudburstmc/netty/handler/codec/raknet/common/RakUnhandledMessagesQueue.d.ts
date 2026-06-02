import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { ScheduledFuture } from '../../../../../../../io/netty/util/concurrent/ScheduledFuture.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { RakChannel } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/RakChannel.d.ts'
import type { EncapsulatedPacket } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/packet/EncapsulatedPacket.d.ts'
export class RakUnhandledMessagesQueue extends SimpleChannelInboundHandler<EncapsulatedPacket> {
    static NAME: string;
    constructor(arg0: RakChannel)
    // private channel: RakChannel;
    // private future: ScheduledFuture<Object>;
    // private messages: EncapsulatedPacket[];
    channelRead0(arg0: ChannelHandlerContext, arg1: EncapsulatedPacket): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    handlerRemoved(arg0: ChannelHandlerContext): void;
    // private trySendMessages(arg0: ChannelHandlerContext): void;
}