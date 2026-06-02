import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { ModelBaker } from '../../../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface ModelModifier$AfterBakeBlock$Context extends Object{
    baker(): ModelBaker;
    sourceModel(): BlockStateModel$UnbakedRoot;
    state(): BlockState;
}