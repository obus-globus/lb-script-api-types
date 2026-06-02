import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ModelBaker } from '../../../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface ModelModifier$BeforeBakeBlock$Context extends Object{
    baker(): ModelBaker;
    state(): BlockState;
}