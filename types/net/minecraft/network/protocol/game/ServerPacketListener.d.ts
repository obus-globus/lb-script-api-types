import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PacketListener } from '../../../../../net/minecraft/network/PacketListener.d.ts'
import type { ServerboundPacketListener } from '../../../../../net/minecraft/network/ServerboundPacketListener.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { PacketFlow } from '../../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
export interface ServerPacketListener extends Object, ServerboundPacketListener{
    flow(): PacketFlow;
    onPacketError(packet: Packet<PacketListener>, e: Exception): void;
}