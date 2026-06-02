import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { EntityCollisionContext } from '../../../../../net/minecraft/world/phys/shapes/EntityCollisionContext.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export class EntityCollisionContext$Empty extends EntityCollisionContext {
    constructor(alwaysCollideWithFluid: boolean)
    isAbove(shape: VoxelShape, pos: BlockPos, defaultValue: boolean): boolean;
}