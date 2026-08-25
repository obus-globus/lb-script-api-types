import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * A axochat user
 *
 * @param name of user
 * @param uuid of user
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket.kt:37}
 */
export class AxoUser extends Record {
    constructor(name: string, uuid: UUID)
    // private name: string;
    /*not mapped: */ name(): string;
    // private uuid: UUID;
    /*not mapped: */ uuid(): UUID;
    component1(): string;
    component2(): UUID;
    copy(name: string, uuid: UUID): AxoUser;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}