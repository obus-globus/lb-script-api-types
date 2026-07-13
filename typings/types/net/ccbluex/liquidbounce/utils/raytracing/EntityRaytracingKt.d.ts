import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityHitResult } from '../../../../../net/minecraft/world/phys/EntityHitResult.d.ts'
export class EntityRaytracingKt extends Object {
    static findEntityInCrosshair(range: number, rotation: Rotation, predicate: (param0: Entity) => boolean): EntityHitResult;
    static findEntityInCrosshair(entity: Entity, range: number, rotation: Rotation, predicate: (param0: Entity) => boolean): EntityHitResult;
    /**
     * Ray-traces from the current camera entity and returns a hit result when the traced entity equals {@link toEntity}.
     *
     * @param toEntity target entity that must be hit by the ray.
     * @param range maximum ray-trace distance.
     * @param rotation yaw/pitch used to build the ray direction.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/EntityRaytracing.kt#L66 | src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/EntityRaytracing.kt:66}
     */
    static isLookingAtEntity(toEntity: Entity, range: number, rotation: Rotation): EntityHitResult;
    static isLookingAtEntity(fromEntity: Entity, toEntity: Entity, rotation: Rotation, range: number, throughWallsRange: number): EntityHitResult;
}