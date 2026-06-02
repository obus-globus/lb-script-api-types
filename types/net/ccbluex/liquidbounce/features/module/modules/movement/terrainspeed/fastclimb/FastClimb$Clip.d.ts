import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * A very vanilla-like fast climb. Not working on anti-cheats.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/fastclimb/FastClimb.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/fastclimb/FastClimb.kt:59}
 */
export class FastClimb$Clip extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FastClimb$Clip;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    readonly parent: ModeValueGroup<Mode>;
}