import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
/**
 * Not server or anti-cheat-specific mode.
 * A basic motion fast climb, which should be configurable enough to bypass most anti-cheats.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/fastclimb/FastClimb.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/fastclimb/FastClimb.kt:40}
 */
export class FastClimb$Motion extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FastClimb$Motion;
    // private climbMotion: number;
    // private /*not mapped: */ getClimbMotion(): number;
    readonly moveHandler: EventHook<PlayerMoveEvent>;
    readonly parent: ModeValueGroup<Mode>;
}