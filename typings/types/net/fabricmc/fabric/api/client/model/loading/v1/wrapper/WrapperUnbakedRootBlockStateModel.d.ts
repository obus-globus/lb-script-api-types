import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel } from '../../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { ModelBaker } from '../../../../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export abstract class WrapperUnbakedRootBlockStateModel extends Object implements BlockStateModel$UnbakedRoot {
    constructor()
    constructor(arg0: BlockStateModel$UnbakedRoot)
    // private wrapped: BlockStateModel$UnbakedRoot;
    bake(arg0: BlockState, arg1: ModelBaker): BlockStateModel;
    resolveDependencies(arg0: ResolvableModel$Resolver): void;
    visualEqualityGroup(arg0: BlockState): Object;
}