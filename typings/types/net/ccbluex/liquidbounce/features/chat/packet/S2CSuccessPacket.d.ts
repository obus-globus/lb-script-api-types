import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$S2C } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
/**
 * This packet is sent after either LoginMojang, LoginJWT, BanUser or UnbanUser were processed successfully.
 *
 * @param reason of success packet
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt#L105 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt:105}
 */
export class S2CSuccessPacket extends Object implements AxochatPacket$S2C {
    constructor(reason: string)
    readonly reason: string;
    component1(): string;
    copy(reason: string): S2CSuccessPacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}