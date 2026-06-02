import type { IBlockStateHandler } from '../../../../../../com/viaversion/viafabricplus/features/block/connections/IBlockStateHandler.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockGetter } from '../../../../../../net/minecraft/world/level/BlockGetter.d.ts'
import type { LevelReader } from '../../../../../../net/minecraft/world/level/LevelReader.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChestType } from '../../../../../../net/minecraft/world/level/block/state/properties/ChestType.d.ts'
export class DoubleChestStateHandler extends Object implements IBlockStateHandler {
    constructor()
    connect(arg0: BlockState, arg1: LevelReader, arg2: BlockPos): BlockState;
    // private getChestType(arg0: BlockState, arg1: BlockGetter, arg2: BlockPos): ChestType;
    isExceptionForConnection(arg0: BlockState): boolean;
}