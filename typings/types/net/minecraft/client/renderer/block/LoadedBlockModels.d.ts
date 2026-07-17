import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { BlockStateModel } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel.d.ts'
import type { BlockModel } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { BlockModel$Unbaked } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel$Unbaked.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class LoadedBlockModels extends Object {
    constructor(unbakedModels: JavaMap<BlockState, BlockModel$Unbaked>, entityModelSet: EntityModelSet, sprites: SpriteGetter, playerSkinRenderCache: PlayerSkinRenderCache)
    // private entityModelSet: EntityModelSet;
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    // private sprites: SpriteGetter;
    // private unbakedModels: JavaMap<BlockState, BlockModel$Unbaked>;
    bake(bakedBlockStateModels: (param0: BlockState) => BlockStateModel, missingModel: BlockStateModel, executor: Executor): CompletableFuture<JavaMap<BlockState, BlockModel>>;
}