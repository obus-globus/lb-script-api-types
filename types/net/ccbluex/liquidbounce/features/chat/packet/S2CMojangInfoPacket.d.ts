import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$S2C } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
/**
 * After the client sent the server a RequestMojangInfo packet, the server will provide the client with a session_hash.
 * A session hash is synonymous with a server id in the context of authentication with Mojang.
 * The client has to send a LoginMojang packet to the server after authenticating itself with Mojang.
 *
 * @param sessionHash session_hash to authenticate with Mojang
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt:31}
 */
export class S2CMojangInfoPacket extends Object implements AxochatPacket$S2C {
    constructor(sessionHash: string)
    readonly sessionHash: string;
    component1(): string;
    copy(sessionHash: string): S2CMojangInfoPacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}