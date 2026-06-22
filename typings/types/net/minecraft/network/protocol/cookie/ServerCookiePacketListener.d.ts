import type { Exception } from '../../../../../java/lang/Exception.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ConnectionProtocol } from '../../../../../net/minecraft/network/ConnectionProtocol.d.ts'
import type { DisconnectionDetails } from '../../../../../net/minecraft/network/DisconnectionDetails.d.ts'
import type { PacketListener } from '../../../../../net/minecraft/network/PacketListener.d.ts'
import type { Packet } from '../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ServerboundCookieResponsePacket } from '../../../../../net/minecraft/network/protocol/cookie/ServerboundCookieResponsePacket.d.ts'
import type { ServerPacketListener } from '../../../../../net/minecraft/network/protocol/game/ServerPacketListener.d.ts'
export interface ServerCookiePacketListener extends Object, ServerPacketListener{
    handleCookieResponse(packet: ServerboundCookieResponsePacket): void;
    isAcceptingMessages(): boolean;
    onDisconnect(details: DisconnectionDetails): void;
    onPacketError(packet: Packet<PacketListener>, e: Exception): void;
    protocol(): ConnectionProtocol;
}