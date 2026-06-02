import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { AbstractMinecart } from '../../../../../net/minecraft/world/entity/vehicle/minecart/AbstractMinecart.d.ts'
import type { CollisionGetter } from '../../../../../net/minecraft/world/level/CollisionGetter.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { EntityCollisionContext } from '../../../../../net/minecraft/world/phys/shapes/EntityCollisionContext.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class MinecartCollisionContext extends EntityCollisionContext {
    constructor(entity: AbstractMinecart, alwaysStandOnFluid: boolean)
    // private ingoreBelow: BlockPos;
    // private slopeIgnore: BlockPos;
    getCollisionShape(state: BlockState, collisionGetter: CollisionGetter, pos: BlockPos): VoxelShape;
    // private setupContext(entity: AbstractMinecart): void;
}