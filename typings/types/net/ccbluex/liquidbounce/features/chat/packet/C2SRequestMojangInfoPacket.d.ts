import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$C2S } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$C2S.d.ts'
/**
 * To log in via mojang, the client has to send a RequestMojangInfo packet.
 * The server will then send a MojangInfo to the client.
 * This packet does not have a body.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt:37}
 */
export class C2SRequestMojangInfoPacket extends Object implements AxochatPacket$C2S {
    constructor()
}