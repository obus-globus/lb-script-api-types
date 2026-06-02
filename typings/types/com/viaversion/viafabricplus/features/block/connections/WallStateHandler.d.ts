import type { IBlockStateHandler } from '../../../../../../com/viaversion/viafabricplus/features/block/connections/IBlockStateHandler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { WallSide } from '../../../../../../net/minecraft/world/level/block/state/properties/WallSide.d.ts'
export class WallStateHandler extends Object implements IBlockStateHandler {
    constructor()
    connect(arg0: BlockState, arg1: LevelReader, arg2: BlockPos): BlockState;
    // private connectsTo(arg0: BlockGetter, arg1: BlockPos, arg2: Direction): boolean;
    // private getWallSide(arg0: boolean): WallSide;
    isExceptionForConnection(arg0: BlockState): boolean;
}