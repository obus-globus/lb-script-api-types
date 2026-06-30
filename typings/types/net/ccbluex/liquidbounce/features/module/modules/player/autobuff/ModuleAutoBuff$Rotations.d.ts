import type { ModuleAutoBuff$Rotations$RotationTimingMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff$Rotations$RotationTimingMode.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
/**
 * Rotation Configurable for every feature that depends on rotation change
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/553a3caf47807e98e69ea3ce0e17bcd9e52eeb71/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt#L89 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/autobuff/ModuleAutoBuff.kt:89}
 */
export class ModuleAutoBuff$Rotations extends RotationsValueGroup {
    static INSTANCE: ModuleAutoBuff$Rotations;
    readonly rotationTiming: ModuleAutoBuff$Rotations$RotationTimingMode;
}