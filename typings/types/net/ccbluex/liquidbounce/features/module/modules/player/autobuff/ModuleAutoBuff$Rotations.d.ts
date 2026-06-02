import type { ModuleAutoBuff$Rotations$RotationTimingMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff$Rotations$RotationTimingMode.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
/**
 * Rotation Configurable for every feature that depends on rotation change
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt#L86 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt:86}
 */
export class ModuleAutoBuff$Rotations extends RotationsValueGroup {
    static INSTANCE: ModuleAutoBuff$Rotations;
    readonly rotationTiming: ModuleAutoBuff$Rotations$RotationTimingMode;
}