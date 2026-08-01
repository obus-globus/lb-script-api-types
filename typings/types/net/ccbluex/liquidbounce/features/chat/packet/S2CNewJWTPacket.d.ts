import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$S2C } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
/**
 * After the client sent the server a RequestJWT packet, the server will provide the client with json web token.
 * This token can be used in the LoginJWT packet.
 *
 * @param token JWT token
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt:51}
 */
export class S2CNewJWTPacket extends Object implements AxochatPacket$S2C {
    constructor(token: string)
    readonly token: string;
    component1(): string;
    copy(token: string): S2CNewJWTPacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}