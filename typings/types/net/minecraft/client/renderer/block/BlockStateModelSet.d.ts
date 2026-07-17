import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricBlockStateModelSet } from '../../../../../net/fabricmc/fabric/api/client/renderer/v1/model/FabricBlockStateModelSet.d.ts'
import type { BlockAndTintGetter } from '../../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockStateModel } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { Material$Baked } from '../../../../../net/minecraft/client/resources/model/sprite/Material$Baked.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockStateModelSet extends Object implements FabricBlockStateModelSet {
    constructor(modelByState: JavaMap<BlockState, BlockStateModel>, missingModel: BlockStateModel)
    // private missingModel: BlockStateModel;
    // private modelByState: JavaMap<BlockState, BlockStateModel>;
    get(state: BlockState): BlockStateModel;
    getParticleMaterial(arg0: BlockState, arg1: BlockAndTintGetter, arg2: BlockPos): Material$Baked;
    getParticleMaterial(blockState: BlockState): Material$Baked;
    missingModel(): BlockStateModel;
}