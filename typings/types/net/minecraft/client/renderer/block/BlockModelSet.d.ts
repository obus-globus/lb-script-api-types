import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockColors } from '../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { BlockStateModelSet } from '../../../../../net/minecraft/client/renderer/block/BlockStateModelSet.d.ts'
import type { BlockModel } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockModelSet extends Object {
    constructor(fallback: BlockStateModelSet, blockModelByState: JavaMap<BlockState, BlockModel>, blockColors: BlockColors)
    // private blockColors: BlockColors;
    // private blockModelByStateCache: JavaMap<BlockState, BlockModel>;
    // private fallback: BlockStateModelSet;
    // private createFallbackModel(blockState: BlockState): BlockModel;
    get(blockState: BlockState): BlockModel;
}