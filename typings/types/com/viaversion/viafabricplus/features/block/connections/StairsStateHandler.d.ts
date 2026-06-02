import type { IBlockStateHandler } from '../../../../../../com/viaversion/viafabricplus/features/block/connections/IBlockStateHandler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class StairsStateHandler extends Object implements IBlockStateHandler {
    constructor()
    connect(arg0: BlockState, arg1: LevelReader, arg2: BlockPos): BlockState;
    isExceptionForConnection(arg0: BlockState): boolean;
}