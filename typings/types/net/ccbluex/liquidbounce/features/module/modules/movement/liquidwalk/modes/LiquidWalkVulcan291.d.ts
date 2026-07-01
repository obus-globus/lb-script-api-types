import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * LiquidWalk Vulcan 2.8.5 - 2.9.1(+?)
 *
 * @tested eu.loyisa.cn
 * @note May cause occasional step flags if player is in a 1x1 water hole.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/modes/LiquidWalkVulcan291.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/modes/LiquidWalkVulcan291.kt:35}
 */
export class LiquidWalkVulcan291 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: LiquidWalkVulcan291;
    // private motion: number;
    // private /*not mapped: */ getMotion(): number;
    readonly parent: ModeValueGroup<Mode>;
    // private tickHandler: EventHook<GameTickEvent>;
}