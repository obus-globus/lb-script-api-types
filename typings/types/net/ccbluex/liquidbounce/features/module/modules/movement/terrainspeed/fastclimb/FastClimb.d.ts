import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
/**
 * Fast Climb allows you to climb up ladder-related blocks faster
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8e0e9ae29646a28b89fab862af8179223121e5bd/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/fastclimb/FastClimb.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/terrainspeed/fastclimb/FastClimb.kt:36}
 */
export class FastClimb extends ToggleableValueGroup {
    static INSTANCE: FastClimb;
    // private modes: ModeValueGroup<Mode>;
}