import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$S2C } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
/**
 * After the client sent the server a RequestJWT packet, the server will provide the client with json web token.
 * This token can be used in the LoginJWT packet.
 *
 * @param token JWT token
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt:51}
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