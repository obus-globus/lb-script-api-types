import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { SpeedBHopBase } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedBHopBase.d.ts'
/**
 * A highly adjustable speed mode
 *
 * Features include:
 * - Horizontal acceleration
 * - Horizontal jump off boost
 * - Vertical jump height
 * - Vertical pull down
 * - Vertical pull down during fall
 * - Strafe
 * - Timer speed
 * - Optimize for criticals
 * - Avoid edge bump
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedCustom.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/modes/SpeedCustom.kt:41}
 */
export class SpeedCustom extends SpeedBHopBase {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private tickHandler: EventHook<GameTickEvent>;
    // private timerSpeed: number;
    // private /*not mapped: */ getTimerSpeed(): number;
}