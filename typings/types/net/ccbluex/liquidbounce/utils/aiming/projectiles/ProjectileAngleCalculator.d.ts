import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { PositionExtrapolation } from '../../../../../../net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.d.ts'
import type { TrajectoryInfo } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.d.ts'
import type { EntityDimensions } from '../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Calculates the shooting angle which hits the supplied target
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/ProjectileAngleCalculator.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/ProjectileAngleCalculator.kt:33}
 */
export interface ProjectileAngleCalculator extends Object{
    calculateAngleFor(projectileInfo: TrajectoryInfo, sourcePos: Vec3, targetPosFunction: PositionExtrapolation, targetShape: EntityDimensions): Rotation | null;
    calculateAngleForEntity(projectileInfo: TrajectoryInfo, entity: LivingEntity): Rotation | null;
    calculateAngleForStaticTarget(projectileInfo: TrajectoryInfo, target: Vec3, shape: EntityDimensions): Rotation | null;
}