import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$C2S } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$C2S.d.ts'
/**
 * To log in using LoginJWT, a client needs to own a json web token.
 * This token can be retrieved by sending RequestJWT as an already authenticated client to the server.
 * The server will send a NewJWT packet to the client.
 *
 * This packet does not have a body.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt#L137 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt:137}
 */
export class C2SRequestJWTPacket extends Object implements AxochatPacket$C2S {
    constructor()
}