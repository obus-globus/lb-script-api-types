import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientboundStatusResponsePacket } from '../../../../../net/minecraft/network/protocol/status/ClientboundStatusResponsePacket.d.ts'
import type { ServerboundStatusRequestPacket } from '../../../../../net/minecraft/network/protocol/status/ServerboundStatusRequestPacket.d.ts'
export class StatusPacketTypes extends Object {
    static CLIENTBOUND_STATUS_RESPONSE: PacketType<ClientboundStatusResponsePacket>;
    static SERVERBOUND_STATUS_REQUEST: PacketType<ServerboundStatusRequestPacket>;
    constructor()
}