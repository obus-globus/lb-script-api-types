import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$C2S } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$C2S.d.ts'
/**
 * The content of this packet will be sent to every client as Message if it fits the validation scheme.
 *
 * @param content content of the message.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt:83}
 */
export class C2SMessagePacket extends Object implements AxochatPacket$C2S {
    constructor(content: string)
    readonly content: string;
    component1(): string;
    copy(content: string): C2SMessagePacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}