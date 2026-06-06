import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$C2S } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$C2S.d.ts'
/**
 * A client can send this packet to unban other users.
 *
 * @param user user is an ID.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt#L118 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt:118}
 */
export class C2SUnbanUserPacket extends Object implements AxochatPacket$C2S {
    constructor(user: string)
    readonly user: string;
    component1(): string;
    copy(user: string): C2SUnbanUserPacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}