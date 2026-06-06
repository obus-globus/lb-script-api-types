import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * A very vanilla-like fast climb. Not working on anti-cheats.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/fastclimb/FastClimb.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/fastclimb/FastClimb.kt:59}
 */
export class FastClimb$Clip extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FastClimb$Clip;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    readonly parent: ModeValueGroup<Mode>;
}