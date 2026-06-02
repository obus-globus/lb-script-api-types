import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EncapsulatedPacket } from '../../../../../../../org/cloudburstmc/netty/channel/raknet/packet/EncapsulatedPacket.d.ts'
import type { AdvancedChannelInboundHandler } from '../../../../../../../org/cloudburstmc/netty/handler/codec/raknet/AdvancedChannelInboundHandler.d.ts'
export class DisconnectNotificationHandler extends AdvancedChannelInboundHandler<EncapsulatedPacket> {
    static INSTANCE: DisconnectNotificationHandler;
    static NAME: string;
    constructor()
    acceptInboundMessage(arg0: ChannelHandlerContext, arg1: Object): boolean;
    channelRead0(arg0: ChannelHandlerContext, arg1: EncapsulatedPacket): void;
}