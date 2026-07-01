import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * Same thing as NoGround NoFall mode
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/modes/CriticalsNoGround.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/criticals/modes/CriticalsNoGround.kt:31}
 */
export class CriticalsNoGround extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: CriticalsNoGround;
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<Mode>;
}