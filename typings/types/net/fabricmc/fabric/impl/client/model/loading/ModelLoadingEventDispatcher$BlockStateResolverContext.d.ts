import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockStateResolver$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/BlockStateResolver$Context.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModelLoadingEventDispatcher$BlockStateResolverContext extends Object implements BlockStateResolver$Context {
    private constructor()
    // private block: Block;
    // private models: JavaMap<BlockState, BlockStateModel$UnbakedRoot>;
    block(): Block;
    // private prepare(arg0: Block): void;
    setModel(arg0: BlockState, arg1: BlockStateModel$UnbakedRoot): void;
}