import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$C2S } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$C2S.d.ts'
/**
 * The content of this packet will be sent to every client as Message if it fits the validation scheme.
 *
 * @param content content of the message.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt#L83 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt:83}
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