import type { ChannelFutureListener } from '../../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PacketSender } from '../../../../../../net/fabricmc/fabric/api/networking/v1/PacketSender.d.ts'
import type { FriendlyByteBuf } from '../../../../../../net/minecraft/network/FriendlyByteBuf.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export interface LoginPacketSender extends Object, PacketSender{
    createPacket(arg0: Identifier, arg1: FriendlyByteBuf): Packet<Object>;
    sendPacket(arg0: Packet<Object>): void;
    sendPacket(arg0: CustomPacketPayload): void;
    sendPacket(arg0: CustomPacketPayload, arg1: ChannelFutureListener): void;
    sendPacket(arg0: Identifier, arg1: FriendlyByteBuf): void;
    sendPacket(arg0: Identifier, arg1: FriendlyByteBuf, arg2: ChannelFutureListener): void;
    sendPacket(arg0: Packet<Object>): void;
    sendPacket(arg0: CustomPacketPayload): void;
    sendPacket(arg0: CustomPacketPayload, arg1: ChannelFutureListener): void;
}