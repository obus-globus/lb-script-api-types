import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$C2S } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$C2S.d.ts'
/**
 * The content of this packet will be sent to every client as Message if it fits the validation scheme.
 *
 * @param content content of the message.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt:78}
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