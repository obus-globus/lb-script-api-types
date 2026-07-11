import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$S2C } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
/**
 * After the client sent the server a RequestMojangInfo packet, the server will provide the client with a session_hash.
 * A session hash is synonymous with a server id in the context of authentication with Mojang.
 * The client has to send a LoginMojang packet to the server after authenticating itself with Mojang.
 *
 * @param sessionHash session_hash to authenticate with Mojang
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt:38}
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