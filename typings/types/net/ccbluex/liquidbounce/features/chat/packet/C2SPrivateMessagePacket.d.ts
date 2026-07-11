import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$C2S } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$C2S.d.ts'
/**
 * The content of this packet will be sent to the specified client as PrivateMessage if it fits the validation scheme.
 *
 * @param receiver receiver is an ID.
 * @param content content of the message.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt#L96 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt:96}
 */
export class C2SPrivateMessagePacket extends Object implements AxochatPacket$C2S {
    constructor(receiver: string, content: string)
    readonly content: string;
    readonly receiver: string;
    component1(): string;
    component2(): string;
    copy(receiver: string, content: string): C2SPrivateMessagePacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}