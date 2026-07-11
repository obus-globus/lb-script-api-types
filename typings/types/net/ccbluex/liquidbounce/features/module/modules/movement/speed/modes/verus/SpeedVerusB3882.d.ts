import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PlayerAfterJumpEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerAfterJumpEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
/**
 * @anticheat Verus
 * @anticheatVersion b3882
 * @testedOn eu.anticheat-test.com
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/verus/SpeedVerusB3882.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/verus/SpeedVerusB3882.kt:41}
 */
export class SpeedVerusB3882 extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>)
    // private afterJumpHandler: EventHook<PlayerAfterJumpEvent>;
    // private moveHandler: EventHook<PlayerMoveEvent>;
    // private timerHandler: EventHook<GameTickEvent>;
}