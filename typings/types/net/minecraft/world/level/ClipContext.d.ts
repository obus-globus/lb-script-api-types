import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClipContextAccess } from '../../../../net/caffeinemc/mods/lithium/common/world/explosions/ClipContextAccess.d.ts'
import type { ClipContextAccessor } from '../../../../net/caffeinemc/mods/lithium/mixin/world/raycast/ClipContextAccessor.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { BlockGetter } from '../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { ClipContext$Block } from '../../../../net/minecraft/world/level/ClipContext$Block.d.ts'
import type { ClipContext$Fluid } from '../../../../net/minecraft/world/level/ClipContext$Fluid.d.ts'
import type { BlockState } from '../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
import type { VoxelShape } from '../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class ClipContext extends Object implements ClipContextAccess, ClipContextAccessor {
    constructor(from: Vec3, to: Vec3, block: ClipContext$Block, fluid: ClipContext$Fluid, entity: Entity)
    constructor(from: Vec3, to: Vec3, block: ClipContext$Block, fluid: ClipContext$Fluid, collisionContext: CollisionContext)
    // private block: ClipContext$Block;
    // private collisionContext: CollisionContext;
    // private fluid: ClipContext$Fluid;
    readonly from: Vec3;
    readonly to: Vec3;
    getBlockShape(blockState: BlockState, level: BlockGetter, pos: BlockPos): VoxelShape;
    getFluidHandling(): ClipContext$Fluid;
    getFluidShape(fluidState: FluidState, level: BlockGetter, pos: BlockPos): VoxelShape;
    getFrom(): Vec3;
    getTo(): Vec3;
    lithium$getCollisionContext(): CollisionContext;
    lithium$setFrom(arg0: Vec3): void;
}