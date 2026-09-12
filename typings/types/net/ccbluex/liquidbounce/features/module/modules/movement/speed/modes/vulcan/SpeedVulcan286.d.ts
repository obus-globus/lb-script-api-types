import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerAfterJumpEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerAfterJumpEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
/**
 * BHop Speed for Vulcan 286
 * Taken from InspectorBoat Vulcan Bypasses (He agreed to it)
 *
 * Tested on both anticheat-test.com and loyisa.cn
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/vulcan/SpeedVulcan286.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/vulcan/SpeedVulcan286.kt:37}
 */
export class SpeedVulcan286 extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private afterJumpHandler: EventHook<PlayerAfterJumpEvent>;
    // private /*not mapped: */ getGoingSideways(): boolean;
}