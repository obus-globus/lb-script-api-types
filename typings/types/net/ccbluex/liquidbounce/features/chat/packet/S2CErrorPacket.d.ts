import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$S2C } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
/**
 * This packet may be sent at any time, but is usually a response to a failed action of the client.
 *
 * @param message Error message
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt#L117 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt:117}
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