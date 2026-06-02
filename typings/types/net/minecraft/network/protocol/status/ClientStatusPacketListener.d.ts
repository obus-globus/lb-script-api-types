import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientboundPacketListener } from '../../../../../net/minecraft/network/ClientboundPacketListener.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { PacketFlow } from '../../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { ClientPongPacketListener } from '../../../../../net/minecraft/network/protocol/ping/ClientPongPacketListener.d.ts'
import type { ClientboundStatusResponsePacket } from '../../../../../net/minecraft/network/protocol/status/ClientboundStatusResponsePacket.d.ts'
export interface ClientStatusPacketListener extends Object, ClientboundPacketListener, ClientPongPacketListener{
    flow(): PacketFlow;
    handleStatusResponse(packet: ClientboundStatusResponsePacket): void;
    protocol(): ConnectionProtocol;
}