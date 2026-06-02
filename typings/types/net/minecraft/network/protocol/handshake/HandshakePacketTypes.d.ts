import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientIntentionPacket } from '../../../../../net/minecraft/network/protocol/handshake/ClientIntentionPacket.d.ts'
export class HandshakePacketTypes extends Object {
    static CLIENT_INTENTION: PacketType<ClientIntentionPacket>;
    constructor()
}