import type { KillAuraRotationsValueGroup$KillAuraRotationTiming } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/killaura/KillAuraRotationsValueGroup$KillAuraRotationTiming.d.ts'
import type { RotationsValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationsValueGroup.d.ts'
export class KillAuraRotationsValueGroup extends RotationsValueGroup {
    static INSTANCE: KillAuraRotationsValueGroup;
    readonly aimThroughWalls: boolean;
    readonly rotationTiming: KillAuraRotationsValueGroup$KillAuraRotationTiming;
}