import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/vulcan/SpeedVulcan286.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/vulcan/SpeedVulcan286.kt:31}
 */
export class SpeedVulcan286 extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private afterJumpHandler: EventHook<PlayerAfterJumpEvent>;
    // private /*not mapped: */ getGoingSideways(): boolean;
}