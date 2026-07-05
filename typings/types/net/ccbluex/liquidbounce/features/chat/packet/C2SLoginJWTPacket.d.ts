import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$C2S } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$C2S.d.ts'
/**
 * To log in using a json web token, the client has to send a LoginJWT packet.
 * it will send Success if the login was successful.
 *
 * @param token can be retrieved by sending RequestJWT on an already authenticated connection.
 * @param allowMessages If allow_messages is true, other clients may send private messages to this client.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt:68}
 */
export class C2SLoginJWTPacket extends Object implements AxochatPacket$C2S {
    constructor(token: string, allowMessages: boolean)
    readonly allowMessages: boolean;
    readonly token: string;
    component1(): string;
    component2(): boolean;
    copy(token: string, allowMessages: boolean): C2SLoginJWTPacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}