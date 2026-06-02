import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface IBlockStateHandler extends Object{
    connect(arg0: BlockState, arg1: LevelReader, arg2: BlockPos): BlockState;
    isExceptionForConnection(arg0: BlockState): boolean;
}