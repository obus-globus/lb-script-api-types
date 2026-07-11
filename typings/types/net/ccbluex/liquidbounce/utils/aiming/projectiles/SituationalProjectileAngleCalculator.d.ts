import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { ProjectileAngleCalculator } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/projectiles/ProjectileAngleCalculator.d.ts'
import type { PositionExtrapolation } from '../../../../../../net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.d.ts'
import type { TrajectoryInfo } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.d.ts'
import type { EntityDimensions } from '../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Uses the best available implementation of {@link ProjectileAngleCalculator}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/SituationalProjectileAngleCalculator.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/SituationalProjectileAngleCalculator.kt:36}
 */
export class SituationalProjectileAngleCalculator extends Object implements ProjectileAngleCalculator {
    static INSTANCE: SituationalProjectileAngleCalculator;
    calculateAngleFor(projectileInfo: TrajectoryInfo, sourcePos: Vec3, targetPosFunction: PositionExtrapolation, targetShape: EntityDimensions): Rotation | null;
    calculateAngleForEntity(projectileInfo: TrajectoryInfo, entity: LivingEntity): Rotation | null;
    calculateAngleForStaticTarget(projectileInfo: TrajectoryInfo, target: Vec3, shape: EntityDimensions): Rotation | null;
}