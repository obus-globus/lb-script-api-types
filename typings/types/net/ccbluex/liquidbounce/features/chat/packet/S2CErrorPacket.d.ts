import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$S2C } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
/**
 * This packet may be sent at any time, but is usually a response to a failed action of the client.
 *
 * @param message Error message
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt#L112 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt:112}
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