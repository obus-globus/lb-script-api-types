import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
/**
 * jumps while consuming, useful for incorrect anticheat configurations
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/consume/NoSlowConsumeJump.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/noslow/modes/consume/NoSlowConsumeJump.kt:27}
 */
export class NoSlowConsumeJump extends Mode {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<Object>)
    // private movementInputHandler: EventHook<MovementInputEvent>;
    readonly parent: ModeValueGroup<Object>;
}