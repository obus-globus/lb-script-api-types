import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel } from '../../../../../../net/minecraft/client/resources/model/ResolvableModel.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface BlockStateModel$UnbakedRoot extends Object, ResolvableModel{
    bake(blockState: BlockState, modelBakery: ModelBaker): BlockStateModel;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
    visualEqualityGroup(blockState: BlockState): Object;
}