import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { DodgePlan } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/autododge/DodgePlan.d.ts'
import type { DodgePlannerConfig } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/autododge/DodgePlannerConfig.d.ts'
import type { ModuleAutoDodge$HitInfo } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/autododge/ModuleAutoDodge$HitInfo.d.ts'
import type { Line } from '../../../../../../../../net/ccbluex/liquidbounce/utils/math/geometry/Line.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DodgePlannerKt extends Object {
    static findOptimalDodgePosition(baseLine: Line): Vec3;
    static getWalkableDistance(basePos: Vec3, dodgePos: Vec3): number;
    static planEvasion(config: DodgePlannerConfig, inflictedHit: ModuleAutoDodge$HitInfo): DodgePlan;
}