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
    static clip(paramarg0: BlockGetter, paramarg1: Vec3, paramarg2: Vec3, paramarg3: ClipContext$Block, paramarg4: ClipContext$Fluid, paramarg5: Entity): BlockHitResult;
    static clip(paramarg0: BlockGetter, paramarg1: Vec3, paramarg2: Vec3, paramarg3: ClipContext$Block, paramarg4: ClipContext$Fluid, paramarg5: CollisionContext): BlockHitResult;
    /**
     * Allows you to check if a point is behind a wall
     *
     * @see net.minecraft.world.entity.LivingEntity.hasLineOfSight
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/Raytracing.kt#L90 | src/main/kotlin/net/ccbluex/liquidbounce/utils/raytracing/Raytracing.kt:90}
     */
    static hasLineOfSight(paramarg0: Vec3, paramarg1: Vec3): boolean;
    static hasLineOfSight(paramarg0: Vec3, paramarg1: Vec3, paramarg2: Entity): boolean;
    static traceFromPlayer(paramarg0: Rotation, paramarg1: number, paramarg2: ClipContext$Block, paramarg3: boolean, paramarg4: number): BlockHitResult;
    static traceFromPoint(paramarg0: number, paramarg1: ClipContext$Block, paramarg2: boolean, paramarg3: Vec3, paramarg4: Vec3, paramarg5: Entity): BlockHitResult;
}