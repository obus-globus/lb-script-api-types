import type { ModuleAutoBuff$Rotations$RotationTimingMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff$Rotations$RotationTimingMode.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
/**
 * Rotation Configurable for every feature that depends on rotation change
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt:89}
 */
export class ModuleAutoBuff$Rotations extends RotationsValueGroup {
    static INSTANCE: ModuleAutoBuff$Rotations;
    readonly rotationTiming: ModuleAutoBuff$Rotations$RotationTimingMode;
}