import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { VoxelShape } from '../../../../../net/minecraft/world/phys/shapes/VoxelShape.d.ts'
/**
 * Fires when a block's collision shape is queried, exposing the block state, position and voxel shape.
 */
export class BlockShapeEvent extends Event {
    constructor(state: BlockState, pos: BlockPos, shape: VoxelShape)
    pos: BlockPos;
    shape: VoxelShape;
    state: BlockState;
}