import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerJumpEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerJumpEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
/**
 * @anticheat Vulcan
 * @anticheatVersion V2.8.6
 * @testedOn anticheat-test.com, eu.loyisa.cn
 * @note flags on specific blocks such as fences
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/vulcan/SpeedVulcanGround286.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/vulcan/SpeedVulcanGround286.kt:40}
 */
export class SpeedVulcanGround286 extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private afterJumpHandler: EventHook<GameTickEvent>;
    // private jumpEvent: EventHook<PlayerJumpEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    // private collidesBottomVertical(): boolean;
}