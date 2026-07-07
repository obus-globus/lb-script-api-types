import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
/**
 * A axochat user
 *
 * @param name of user
 * @param uuid of user
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/packet/AxochatPacket.kt:37}
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