import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel } from '../../../../../../net/minecraft/client/resources/model/ResolvableModel.d.ts'
export interface BlockStateModel$Unbaked extends Object, ResolvableModel{
    asRoot(): BlockStateModel$UnbakedRoot;
    bake(modelBakery: ModelBaker): BlockStateModel;
}