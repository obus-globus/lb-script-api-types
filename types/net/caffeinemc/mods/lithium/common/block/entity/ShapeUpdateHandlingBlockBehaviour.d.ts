import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelReader } from '../../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface ShapeUpdateHandlingBlockBehaviour extends Object{
    lithium$handleShapeUpdate(arg0: LevelReader, arg1: BlockState, arg2: BlockPos, arg3: BlockPos, arg4: BlockState): void;
}