import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockStateModel } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockStateModel$Unbaked } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$Unbaked.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { ModelBaker } from '../../../../../../net/minecraft/client/resources/model/ModelBaker.d.ts'
import type { ModelBaker$SharedOperationKey } from '../../../../../../net/minecraft/client/resources/model/ModelBaker$SharedOperationKey.d.ts'
import type { ResolvableModel$Resolver } from '../../../../../../net/minecraft/client/resources/model/ResolvableModel$Resolver.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class BlockStateModel$SimpleCachedUnbakedRoot extends Object implements BlockStateModel$UnbakedRoot {
    constructor(contents: BlockStateModel$Unbaked)
    // private bakingKey: (param0: ModelBaker) => BlockStateModel;
    // private contents: BlockStateModel$Unbaked;
    bake(blockState: BlockState, modelBakery: ModelBaker): BlockStateModel;
    resolveDependencies(resolver: ResolvableModel$Resolver): void;
    visualEqualityGroup(blockState: BlockState): Object;
}