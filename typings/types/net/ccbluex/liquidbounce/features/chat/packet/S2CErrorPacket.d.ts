import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$S2C } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
/**
 * This packet may be sent at any time, but is usually a response to a failed action of the client.
 *
 * @param message Error message
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt#L117 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt:117}
 */
export class S2CErrorPacket extends Object implements AxochatPacket$S2C {
    constructor(message: string)
    readonly message: string;
    component1(): string;
    copy(message: string): S2CErrorPacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}