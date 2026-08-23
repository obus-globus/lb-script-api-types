import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { ProjectileAngleCalculator } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/projectiles/ProjectileAngleCalculator.d.ts'
import type { PositionExtrapolation } from '../../../../../../net/ccbluex/liquidbounce/utils/entity/PositionExtrapolation.d.ts'
import type { TrajectoryInfo } from '../../../../../../net/ccbluex/liquidbounce/utils/render/trajectory/TrajectoryInfo.d.ts'
import type { EntityDimensions } from '../../../../../../net/minecraft/world/entity/EntityDimensions.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Implements the angle calculator described by Cydhra
 * ([see here](https://gitlab.com/Cydhra/Vibrant/-/blob/master/doc/main.pdf)).
 *
 * This is currently used as the flagship implementation. When the distance between the source and target pos is low,
 * this implementation often malfunctions. Use a backup calculator for low distances instead.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/CydhranianProjectileAngleCalculator.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/CydhranianProjectileAngleCalculator.kt:46}
 */
export class CydhranianProjectileAngleCalculator extends Object implements ProjectileAngleCalculator {
    static INSTANCE: CydhranianProjectileAngleCalculator;
    /**
     * @param sourcePos the position the projectile originates from (usually the player's eyePos)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2727616ee96ec8c4ceda97bebdd601f050a6856e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/CydhranianProjectileAngleCalculator.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/CydhranianProjectileAngleCalculator.kt:50}
     */
    calculateAngleFor(projectileInfo: TrajectoryInfo, sourcePos: Vec3, targetPosFunction: PositionExtrapolation, targetShape: EntityDimensions): Rotation | null;
    calculateAngleForEntity(projectileInfo: TrajectoryInfo, entity: LivingEntity): Rotation | null;
    calculateAngleForStaticTarget(projectileInfo: TrajectoryInfo, target: Vec3, shape: EntityDimensions): Rotation | null;
    // private calculatePossibleTravelTimeToTarget(trajectoryInfo: TrajectoryInfo, playerHeadPosition: Vec3, positionFunction: PositionExtrapolation, defaultBoxOffset: Vec3): number | null;
    // private getDirectionByTime(trajectoryInfo: TrajectoryInfo, enemyPosition: Vec3, playerHeadPosition: Vec3, time: number): Vec3;
    // private getVelocityOnImpact(trajectoryInfo: TrajectoryInfo, ticksPassed: number, initialDir: Vec3): Vec3;
    // private predictArrowDirection(trajectoryInfo: TrajectoryInfo, playerHeadPosition: Vec3, targetDimensions: EntityDimensions, positionFunction: PositionExtrapolation): Vec3 | null;
}