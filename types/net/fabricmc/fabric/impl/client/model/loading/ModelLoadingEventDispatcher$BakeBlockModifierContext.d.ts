import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModelModifier$AfterBakeBlock$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$AfterBakeBlock$Context.d.ts'
import type { ModelModifier$BeforeBakeBlock$Context } from '../../../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ModelModifier$BeforeBakeBlock$Context.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { ModelBaker } from '../../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModelLoadingEventDispatcher$BakeBlockModifierContext extends Object implements ModelModifier$AfterBakeBlock$Context, ModelModifier$BeforeBakeBlock$Context {
    private constructor(arg0: BlockState, arg1: ModelBaker)
    // private baker: ModelBaker;
    // private sourceModel: BlockStateModel$UnbakedRoot;
    // private state: BlockState;
    baker(): ModelBaker;
    // private prepareAfterBake(arg0: BlockStateModel$UnbakedRoot): void;
    sourceModel(): BlockStateModel$UnbakedRoot;
    state(): BlockState;
}