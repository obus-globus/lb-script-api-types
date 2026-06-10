import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { BlockEntityRenderer } from '../../../../../net/minecraft/client/renderer/blockentity/BlockEntityRenderer.d.ts'
import type { BlockEntityRenderState } from '../../../../../net/minecraft/client/renderer/blockentity/state/BlockEntityRenderState.d.ts'
import type { EntityRenderDispatcher } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { ModelFeatureRenderer$CrumblingOverlay } from '../../../../../net/minecraft/client/renderer/feature/ModelFeatureRenderer$CrumblingOverlay.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceManagerReloadListener } from '../../../../../net/minecraft/server/packs/resources/ResourceManagerReloadListener.d.ts'
import type { BlockEntity } from '../../../../../net/minecraft/world/level/block/entity/BlockEntity.d.ts'
import type { BlockEntityType } from '../../../../../net/minecraft/world/level/block/entity/BlockEntityType.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class BlockEntityRenderDispatcher extends Object implements FabricResourceReloader, ResourceManagerReloadListener {
    constructor(font: Font, entityModelSet: () => EntityModelSet, blockModelResolver: BlockModelResolver, itemModelResolver: ItemModelResolver, entityRenderer: EntityRenderDispatcher, sprites: SpriteGetter, playerSkinRenderCache: PlayerSkinRenderCache)
    // private blockModelResolver: BlockModelResolver;
    // private cameraPos: Vec3;
    // private entityModelSet: () => EntityModelSet;
    // private entityRenderer: EntityRenderDispatcher;
    // private fabric$id: Identifier;
    // private font: Font;
    // private itemModelResolver: ItemModelResolver;
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    // private renderers: Map<BlockEntityType<Object>, BlockEntityRenderer<Object, Object>>;
    // private sprites: SpriteGetter;
    fabric$getId(): Identifier;
    getName(): string;
    getRenderer<E extends BlockEntity, S extends BlockEntityRenderState>(blockEntity: E): BlockEntityRenderer<E, S>;
    getRenderer<E extends BlockEntity, S extends BlockEntityRenderState>(state: S): BlockEntityRenderer<E, S>;
    onResourceManagerReload(resourceManager: ResourceManager): void;
    prepare(cameraPos: Vec3): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
    submit<S extends BlockEntityRenderState>(state: S, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, camera: CameraRenderState): void;
    tryExtractRenderState<S extends BlockEntityRenderState, E extends BlockEntity>(blockEntity: E, partialTicks: number, breakProgress: ModelFeatureRenderer$CrumblingOverlay): S;
}