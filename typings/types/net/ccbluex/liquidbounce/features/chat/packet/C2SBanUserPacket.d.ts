import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$C2S } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$C2S.d.ts'
/**
 * A client can send this packet to ban other users from using this chat.
 *
 * @param user user is an ID.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt#L111 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt:111}
 */
export class C2SBanUserPacket extends Object implements AxochatPacket$C2S {
    constructor(user: string)
    readonly user: string;
    component1(): string;
    copy(user: string): C2SBanUserPacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}