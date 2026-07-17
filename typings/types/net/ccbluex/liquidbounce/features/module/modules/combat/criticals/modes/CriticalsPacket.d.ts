import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { CriticalsPacket$Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/criticals/modes/CriticalsPacket$Mode.d.ts'
import type { MovePacketType } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/network/MovePacketType.d.ts'
/**
 * Packet criticals mode
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/modes/CriticalsPacket.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/modes/CriticalsPacket.kt:36}
 */
export class CriticalsPacket extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: CriticalsPacket;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private mode: CriticalsPacket$Mode;
    // private /*not mapped: */ getMode(): CriticalsPacket$Mode;
    // private packetType: MovePacketType;
    // private /*not mapped: */ getPacketType(): MovePacketType;
    readonly parent: ModeValueGroup<Mode>;
    // private p(mod: number, onGround: boolean): void;
}