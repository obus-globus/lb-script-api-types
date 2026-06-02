import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExtraModelKey } from '../../../../../net/fabricmc/fabric/api/client/model/loading/v1/ExtraModelKey.d.ts'
import type { FabricModelManager } from '../../../../../net/fabricmc/fabric/api/client/model/loading/v1/FabricModelManager.d.ts'
import type { FabricResourceReloader } from '../../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { BlockColors } from '../../../../../net/minecraft/client/color/block/BlockColors.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { BlockModelSet } from '../../../../../net/minecraft/client/renderer/block/BlockModelSet.d.ts'
import type { BlockStateModelSet } from '../../../../../net/minecraft/client/renderer/block/BlockStateModelSet.d.ts'
import type { FluidStateModelSet } from '../../../../../net/minecraft/client/renderer/block/FluidStateModelSet.d.ts'
import type { ClientItem$Properties } from '../../../../../net/minecraft/client/renderer/item/ClientItem$Properties.d.ts'
import type { ItemModel } from '../../../../../net/minecraft/client/renderer/item/ItemModel.d.ts'
import type { ModelBakery$MissingModels } from '../../../../../net/minecraft/client/resources/model/ModelBakery$MissingModels.d.ts'
import type { ModelManager$ReloadState } from '../../../../../net/minecraft/client/resources/model/ModelManager$ReloadState.d.ts'
import type { AtlasManager } from '../../../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModelManager extends Object implements FabricModelManager, FabricResourceReloader, PreparableReloadListener {
    constructor(blockColors: BlockColors, atlasManager: AtlasManager, playerSkinRenderCache: PlayerSkinRenderCache)
    // private atlasManager: AtlasManager;
    // private bakedItemStackModels: Map<Identifier, ItemModel>;
    // private blockColors: BlockColors;
    readonly blockModelSet: BlockModelSet;
    readonly blockStateModelSet: BlockStateModelSet;
    // private entityModelSet: EntityModelSet;
    // private eventDispatcherFuture: CompletableFuture<Object>;
    // private extraModels: Map<Object | null, Object | null>;
    // private fabric$id: Identifier;
    readonly fluidStateModelSet: FluidStateModelSet;
    // private itemProperties: Map<Identifier, ClientItem$Properties>;
    // private missingModels: ModelBakery$MissingModels;
    // private modelGroups: Object2IntMap<BlockState>;
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    // private apply(preparations: ModelManager$ReloadState): void;
    entityModels(): () => EntityModelSet;
    fabric$getId(): Identifier;
    getBlockModelSet(): BlockModelSet;
    getBlockStateModelSet(): BlockStateModelSet;
    getFluidStateModelSet(): FluidStateModelSet;
    getItemModel(id: Identifier): ItemModel;
    getItemProperties(id: Identifier): ClientItem$Properties;
    getModel<T extends Object | number | string | boolean>(arg0: ExtraModelKey<T>): T;
    getModel(arg0: ExtraModelKey<Object>): Object;
    getName(): string;
    getName(): string;
    prepareSharedState(currentReload: PreparableReloadListener$SharedState): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => java.util.concurrent.CompletableFuture<unknown>, reloadExecutor: Executor): CompletableFuture<void>;
    requiresRender(oldState: BlockState, newState: BlockState): boolean;
    // private withModelDispatcher(arg0: (param0: Object) => Object): (param0: Object) => Object;
}