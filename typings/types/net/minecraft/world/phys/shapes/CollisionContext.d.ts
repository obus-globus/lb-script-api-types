import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { CollisionGetter } from '../../../../../net/minecraft/world/level/CollisionGetter.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FluidState } from '../../../../../net/minecraft/world/level/material/FluidState.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
export interface CollisionContext extends Object{
    alwaysCollideWithFluid(): boolean;
    canStandOnFluid(fluidStateAbove: FluidState, fluid: FluidState): boolean;
    getCollisionShape(state: BlockState, collisionGetter: CollisionGetter, pos: BlockPos): VoxelShape;
    isAbove(shape: VoxelShape, pos: BlockPos, defaultValue: boolean): boolean;
    isDescending(): boolean;
    isHoldingItem(item: Item): boolean;
    isPlacement(): boolean;
}