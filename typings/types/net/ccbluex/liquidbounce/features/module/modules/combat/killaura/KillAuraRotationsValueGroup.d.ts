import type { KillAuraRotationsValueGroup$KillAuraRotationTiming } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraRotationsValueGroup$KillAuraRotationTiming.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
export class KillAuraRotationsValueGroup extends RotationsValueGroup {
    static INSTANCE: KillAuraRotationsValueGroup;
    readonly aimThroughWalls: boolean;
    /**
     * When enabled, if current rotation can still raytrace the target, skip rotating.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraRotationsValueGroup.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraRotationsValueGroup.kt:32}
     */
    readonly lazyRotation: boolean;
    readonly rotationTiming: KillAuraRotationsValueGroup$KillAuraRotationTiming;
}