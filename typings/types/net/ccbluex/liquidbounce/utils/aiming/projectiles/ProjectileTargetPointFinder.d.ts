import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Utility class which finds a visible (= hittable) point on the target.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/ProjectileTargetPointFinder.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/ProjectileTargetPointFinder.kt:29}
 */
export class ProjectileTargetPointFinder extends Object {
    static INSTANCE: ProjectileTargetPointFinder;
    findHittablePosition(playerHeadPosition: Vec3, directionOnImpact: Vec3, entityPositionOnImpact: Vec3, targetEntityBox: AABB): Vec3 | null;
    // private logRaytraceTime(currTime: number): void;
}