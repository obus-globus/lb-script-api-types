import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxoUser } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxoUser.d.ts'
import type { AxochatPacket$S2C } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$S2C.d.ts'
/**
 * This packet will be sent to every authenticated client
 * if another client successfully sent a message to the server.
 *
 * @param id author_id is an ID.
 * @param user author_info is optional and described in detail in UserInfo.
 * @param content content is any message fitting the validation scheme of the server.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ClientPackets.kt:66}
 */
export class S2CMessagePacket extends Object implements AxochatPacket$S2C {
    constructor(id: string, user: AxoUser, content: string)
    readonly content: string;
    readonly id: string;
    readonly user: AxoUser;
    component1(): string;
    component2(): AxoUser;
    component3(): string;
    copy(id: string, user: AxoUser, content: string): S2CMessagePacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}