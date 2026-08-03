import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerAfterJumpEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerAfterJumpEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
/**
 * BHop Speed for Vulcan 288
 * Tested on both anticheat-test.com and loyisa.cn
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/vulcan/SpeedVulcan288.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/vulcan/SpeedVulcan288.kt:40}
 */
export class SpeedVulcan288 extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private afterJumpHandler: EventHook<PlayerAfterJumpEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    // private tickHandler: EventHook<GameTickEvent>;
}