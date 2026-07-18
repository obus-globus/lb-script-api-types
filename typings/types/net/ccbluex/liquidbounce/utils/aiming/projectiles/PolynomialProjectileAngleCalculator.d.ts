import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { ProjectileAngleCalculator } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/projectiles/ProjectileAngleCalculator.d.ts'
import type { PositionExtrapolation } from '../../../../../../net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.d.ts'
import type { TrajectoryInfo } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.d.ts'
import type { EntityDimensions } from '../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Solves this problem by approximating the trajectory as a second degree polynomial. This approximation is good for
 * ~20 ticks.
 *
 * Currently only used as backup
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/PolynomialProjectileAngleCalculator.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/PolynomialProjectileAngleCalculator.kt:39}
 */
export class PolynomialProjectileAngleCalculator extends Object implements ProjectileAngleCalculator {
    static INSTANCE: PolynomialProjectileAngleCalculator;
    calculateAngleFor(projectileInfo: TrajectoryInfo, sourcePos: Vec3, targetPosFunction: PositionExtrapolation, targetShape: EntityDimensions): Rotation | null;
    calculateAngleForEntity(projectileInfo: TrajectoryInfo, entity: LivingEntity): Rotation | null;
    calculateAngleForStaticTarget(projectileInfo: TrajectoryInfo, target: Vec3, shape: EntityDimensions): Rotation | null;
}