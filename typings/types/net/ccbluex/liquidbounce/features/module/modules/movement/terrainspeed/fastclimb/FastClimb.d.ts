import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Fast Climb allows you to climb up ladder-related blocks faster
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/fastclimb/FastClimb.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/fastclimb/FastClimb.kt:33}
 */
export class FastClimb extends ToggleableValueGroup {
    static INSTANCE: FastClimb;
    // private modes: ModeValueGroup<Mode>;
}