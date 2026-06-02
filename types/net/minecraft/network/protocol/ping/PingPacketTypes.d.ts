import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientboundPongResponsePacket } from '../../../../../net/minecraft/network/protocol/ping/ClientboundPongResponsePacket.d.ts'
import type { ServerboundPingRequestPacket } from '../../../../../net/minecraft/network/protocol/ping/ServerboundPingRequestPacket.d.ts'
export class PingPacketTypes extends Object {
    static CLIENTBOUND_PONG_RESPONSE: PacketType<ClientboundPongResponsePacket>;
    static SERVERBOUND_PING_REQUEST: PacketType<ServerboundPingRequestPacket>;
    constructor()
}