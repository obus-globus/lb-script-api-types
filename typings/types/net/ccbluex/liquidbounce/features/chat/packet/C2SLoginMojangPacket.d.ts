import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AxochatPacket$C2S } from '../../../../../../net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket$C2S.d.ts'
/**
 * After the client received a MojangInfo packet and authenticating itself with mojang,
 * it has to send a LoginMojang packet to the server.
 * After the server receives a LoginMojang packet, it will send Success if the login was successful.
 *
 * @param name name needs to be associated with the uuid.
 * @param uuid uuid is not guaranteed to be hyphenated.
 * @param allowMessages If allow_messages is true, other clients may send private messages to this client.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f52f78665697bbb9fc5260ebedd8725061837d27/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/ServerPackets.kt:48}
 */
export class C2SLoginMojangPacket extends Object implements AxochatPacket$C2S {
    constructor(name: string, uuid: UUID, allowMessages: boolean)
    readonly allowMessages: boolean;
    readonly name: string;
    readonly uuid: UUID;
    component1(): string;
    component2(): UUID;
    component3(): boolean;
    copy(name: string, uuid: UUID, allowMessages: boolean): C2SLoginMojangPacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}