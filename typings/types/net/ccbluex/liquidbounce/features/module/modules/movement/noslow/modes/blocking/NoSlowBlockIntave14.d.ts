import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * tested on mineblaze.net
 * made for intave version 14.8.4
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/blocking/NoSlowBlockIntave14.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/blocking/NoSlowBlockIntave14.kt:35}
 */
export class NoSlowBlockIntave14 extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private packetHandler: EventHook<PacketEvent>;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
}