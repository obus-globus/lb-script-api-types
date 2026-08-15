import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxoUser } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxoUser.d.ts'
import type { AxochatPacket$S2C } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
/**
 * This packet will be sent to an authenticated client with allow_messages turned on,
 * if another client successfully sent a private message to the server with the id.
 *
 * @param id author_id is an ID.
 * @param user author_info is optional and described in detail in UserInfo.
 * @param content content is any message fitting the validation scheme of the server.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt#L87 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt:87}
 */
export class S2CPrivateMessagePacket extends Object implements AxochatPacket$S2C {
    constructor(id: string, user: AxoUser, content: string)
    readonly content: string;
    readonly id: string;
    readonly user: AxoUser;
    component1(): string;
    component2(): AxoUser;
    component3(): string;
    copy(id: string, user: AxoUser, content: string): S2CPrivateMessagePacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}