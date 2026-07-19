import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rotation } from '../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockGetter } from '../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ClipContext$Block } from '../../../../../net/minecraft/world/level/ClipContext$Block.d.ts'
import type { ClipContext$Fluid } from '../../../../../net/minecraft/world/level/ClipContext$Fluid.d.ts'
import type { BlockHitResult } from '../../../../../net/minecraft/world/phys/BlockHitResult.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
export class RaytracingKt extends Object {
    static clip(self: BlockGetter, from: Vec3, to: Vec3, block: ClipContext$Block, fluid: ClipContext$Fluid, entity: Entity): BlockHitResult;
    static clip(self: BlockGetter, from: Vec3, to: Vec3, block: ClipContext$Block, fluid: ClipContext$Fluid, collisionContext: CollisionContext): BlockHitResult;
    /**
     * Allows you to check if a point is behind a wall
     *
     * @see net.minecraft.world.entity.LivingEntity.hasLineOfSight
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/Raytracing.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/Raytracing.kt:95}
     */
    static hasLineOfSight(paramarg0: Vec3, paramarg1: Vec3): boolean;
    static hasLineOfSight(eyes: Vec3, vec3: Vec3, entity: Entity): boolean;
    static traceFromPlayer(rotation: Rotation, range: number, block: ClipContext$Block, fluid: ClipContext$Fluid, tickDelta: number): BlockHitResult;
    static traceFromPoint(range: number, block: ClipContext$Block, fluid: ClipContext$Fluid, start: Vec3, direction: Vec3, entity: Entity): BlockHitResult;
}