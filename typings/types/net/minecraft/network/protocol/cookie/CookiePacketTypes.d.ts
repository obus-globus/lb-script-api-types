import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PacketType } from '../../../../../net/minecraft/network/protocol/PacketType.d.ts'
import type { ClientboundCookieRequestPacket } from '../../../../../net/minecraft/network/protocol/cookie/ClientboundCookieRequestPacket.d.ts'
import type { ServerboundCookieResponsePacket } from '../../../../../net/minecraft/network/protocol/cookie/ServerboundCookieResponsePacket.d.ts'
export class CookiePacketTypes extends Object {
    static CLIENTBOUND_COOKIE_REQUEST: PacketType<ClientboundCookieRequestPacket>;
    static SERVERBOUND_COOKIE_RESPONSE: PacketType<ServerboundCookieResponsePacket>;
    constructor()
}