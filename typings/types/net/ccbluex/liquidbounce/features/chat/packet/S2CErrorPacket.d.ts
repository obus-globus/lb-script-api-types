import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$S2C } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
/**
 * This packet may be sent at any time, but is usually a response to a failed action of the client.
 *
 * @param message Error message
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt#L117 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt:117}
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