import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { PacketListener } from '../../../../../net/minecraft/network/PacketListener.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerPacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerPacketListener.d.ts'
import type { ServerPingPacketListener } from '../../../../../net/minecraft/network/protocol/ping/ServerPingPacketListener.d.ts'
import type { ServerboundPingRequestPacket } from '../../../../../net/minecraft/network/protocol/ping/ServerboundPingRequestPacket.d.ts'
import type { ServerboundStatusRequestPacket } from '../../../../../net/minecraft/network/protocol/status/ServerboundStatusRequestPacket.d.ts'
export interface ServerStatusPacketListener extends Object, ServerPacketListener, ServerPingPacketListener{
    handlePingRequest(packet: ServerboundPingRequestPacket): void;
    handleStatusRequest(packet: ServerboundStatusRequestPacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    onPacketError(packet: Packet<PacketListener>, e: Exception): void;
    protocol(): ConnectionProtocol;
}