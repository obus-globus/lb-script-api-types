import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityHitResult } from '../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
export class EntityRaytracingKt extends Object {
    static findEntityInCrosshair(paramarg0: number, paramarg1: Rotation, paramarg2: (param0: Entity) => kotlin.Boolean): EntityHitResult;
    static findEntityInCrosshair(paramarg0: Entity, paramarg1: number, paramarg2: Rotation, paramarg3: (param0: Entity) => kotlin.Boolean): EntityHitResult;
    /**
     * Ray-traces from the current camera entity and returns a hit result when the traced entity equals {@link toEntity}.
     *
     * @param toEntity target entity that must be hit by the ray.
     * @param range maximum ray-trace distance.
     * @param rotation yaw/pitch used to build the ray direction.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/EntityRaytracing.kt#L59 | src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/EntityRaytracing.kt:59}
     */
    static isLookingAtEntity(paramarg0: Entity, paramarg1: number, paramarg2: Rotation): EntityHitResult;
    static isLookingAtEntity(paramarg0: Entity, paramarg1: Entity, paramarg2: Rotation, paramarg3: number, paramarg4: number): EntityHitResult;
}