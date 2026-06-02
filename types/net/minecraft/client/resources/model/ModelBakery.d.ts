import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ModelLoadingEventDispatcher } from '../../../../../net/fabricmc/fabric/impl/client/model/loading/ModelLoadingEventDispatcher.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { ClientItem } from '../../../../../net/minecraft/client/renderer/item/ClientItem.d.ts'
import type { RenderType } from '../../../../../net/minecraft/client/renderer/rendertype/RenderType.d.ts'
import type { ModelBakery$BakingResult } from '../../../../../net/minecraft/client/resources/model/ModelBakery$BakingResult.d.ts'
import type { ResolvedModel } from '../../../../../net/minecraft/client/resources/model/ResolvedModel.d.ts'
import type { MaterialBaker } from '../../../../../net/minecraft/client/resources/model/sprite/MaterialBaker.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { SpriteId } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteId.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModelBakery extends Object {
    static BREAKING_LOCATIONS: Identifier[];
    static DESTROY_STAGES: Identifier[];
    static DESTROY_STAGE_COUNT: number;
    static DESTROY_TYPES: RenderType[];
    static FIRE_0: SpriteId;
    static FIRE_1: SpriteId;
    constructor(entityModelSet: EntityModelSet, sprites: SpriteGetter, playerSkinRenderCache: PlayerSkinRenderCache, unbakedBlockStateModels: Map<BlockState, BlockStateModel$UnbakedRoot>, clientInfos: Map<Identifier, ClientItem>, resolvedModels: Map<Identifier, ResolvedModel>, missingModel: ResolvedModel)
    // private clientInfos: Map<Identifier, ClientItem>;
    // private entityModelSet: EntityModelSet;
    // private fabric_eventDispatcher: ModelLoadingEventDispatcher;
    // private missingModel: ResolvedModel;
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    // private resolvedModels: Map<Identifier, ResolvedModel>;
    // private sprites: SpriteGetter;
    // private unbakedBlockStateModels: Map<BlockState, BlockStateModel$UnbakedRoot>;
    bakeModels(materials: MaterialBaker, taskExecutor: Executor): CompletableFuture<ModelBakery$BakingResult>;
}