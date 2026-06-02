import type { ChannelFutureListener } from '../../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { CustomPacketPayload } from '../../../../../../net/minecraft/network/protocol/common/custom/CustomPacketPayload.d.ts'
export interface PacketSender extends Object{
    createPacket(arg0: CustomPacketPayload): Packet<Object>;
    disconnect(arg0: Component): void;
    sendPacket(arg0: Packet<Object>): void;
    sendPacket(arg0: Packet<Object>, arg1: ChannelFutureListener): void;
    sendPacket(arg0: CustomPacketPayload): void;
    sendPacket(arg0: CustomPacketPayload, arg1: ChannelFutureListener): void;
}