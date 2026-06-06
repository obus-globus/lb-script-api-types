import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
/**
 * LiquidWalk Vulcan 2.8.5 - 2.9.1(+?)
 *
 * @tested eu.loyisa.cn
 *
 * @remarks
 * - May cause occasional step flags if player is in a 1x1 water hole.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/modes/LiquidWalkVulcan291.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/liquidwalk/modes/LiquidWalkVulcan291.kt:29}
 */
export class LiquidWalkVulcan291 extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: LiquidWalkVulcan291;
    // private motion: number;
    // private /*not mapped: */ getMotion(): number;
    readonly parent: ModeValueGroup<Mode>;
    // private tickHandler: EventHook<GameTickEvent>;
}