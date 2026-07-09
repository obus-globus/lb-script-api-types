import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Utility class which finds a visible (= hittable) point on the target.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/ProjectileTargetPointFinder.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/projectiles/ProjectileTargetPointFinder.kt:32}
 */
export class ProjectileTargetPointFinder extends Object {
    static INSTANCE: ProjectileTargetPointFinder;
    findHittablePosition(playerHeadPosition: Vec3, directionOnImpact: Vec3, entityPositionOnImpact: Vec3, targetEntityBox: AABB): Vec3 | null;
    // private logRaytraceTime(currTime: number): void;
}