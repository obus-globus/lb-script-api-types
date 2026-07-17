import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { PoseStack } from '../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { BoatRenderer1_8 } from '../../../../../com/viaversion/viafabricplus/features/entity/legacy_boat_model/BoatRenderer1_8.d.ts'
import type { CompletableFuture } from '../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Executor } from '../../../../../java/util/concurrent/Executor.d.ts'
import type { Supplier } from '../../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricResourceReloader } from '../../../../../net/fabricmc/fabric/impl/resource/FabricResourceReloader.d.ts'
import type { CrashReport } from '../../../../../net/minecraft/CrashReport.d.ts'
import type { CrashReportCategory } from '../../../../../net/minecraft/CrashReportCategory.d.ts'
import type { Camera } from '../../../../../net/minecraft/client/Camera.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { Options } from '../../../../../net/minecraft/client/Options.d.ts'
import type { ClientAvatarEntity } from '../../../../../net/minecraft/client/entity/ClientAvatarEntity.d.ts'
import type { ClientMannequin } from '../../../../../net/minecraft/client/entity/ClientMannequin.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { AbstractClientPlayer } from '../../../../../net/minecraft/client/player/AbstractClientPlayer.d.ts'
import type { ItemInHandRenderer } from '../../../../../net/minecraft/client/renderer/ItemInHandRenderer.d.ts'
import type { MapRenderer } from '../../../../../net/minecraft/client/renderer/MapRenderer.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { SubmitNodeCollector } from '../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { Frustum } from '../../../../../net/minecraft/client/renderer/culling/Frustum.d.ts'
import type { EntityRenderer } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderer.d.ts'
import type { AvatarRenderer } from '../../../../../net/minecraft/client/renderer/entity/player/AvatarRenderer.d.ts'
import type { EntityRenderState } from '../../../../../net/minecraft/client/renderer/entity/state/EntityRenderState.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { CameraRenderState } from '../../../../../net/minecraft/client/renderer/state/level/CameraRenderState.d.ts'
import type { TextureManager } from '../../../../../net/minecraft/client/renderer/texture/TextureManager.d.ts'
import type { EquipmentAssetManager } from '../../../../../net/minecraft/client/resources/model/EquipmentAssetManager.d.ts'
import type { AtlasManager } from '../../../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PreparableReloadListener$PreparationBarrier } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$PreparationBarrier.d.ts'
import type { PreparableReloadListener$SharedState } from '../../../../../net/minecraft/server/packs/resources/PreparableReloadListener$SharedState.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
import type { ResourceManagerReloadListener } from '../../../../../net/minecraft/server/packs/resources/ResourceManagerReloadListener.d.ts'
import type { Avatar } from '../../../../../net/minecraft/world/entity/Avatar.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EntityType } from '../../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { PlayerModelType } from '../../../../../net/minecraft/world/entity/player/PlayerModelType.d.ts'
export class EntityRenderDispatcher extends Object implements FabricResourceReloader, ResourceManagerReloadListener {
    constructor(minecraft: Minecraft, textureManager: TextureManager, blockModelResolver: BlockModelResolver, itemModelResolver: ItemModelResolver, mapRenderer: MapRenderer, atlasManager: AtlasManager, font: Font, options: Options, entityModels: () => EntityModelSet, equipmentAssets: EquipmentAssetManager, playerSkinRenderCache: PlayerSkinRenderCache)
    // private atlasManager: AtlasManager;
    // private blockModelResolver: BlockModelResolver;
    camera: Camera;
    crosshairPickEntity: Entity;
    // private entityModels: () => EntityModelSet;
    // private equipmentAssets: EquipmentAssetManager;
    // private fabric$id: Identifier;
    // private font: Font;
    readonly itemInHandRenderer: ItemInHandRenderer;
    // private itemModelResolver: ItemModelResolver;
    // private mannequinRenderers: JavaMap<PlayerModelType, AvatarRenderer<ClientMannequin>>;
    // private mapRenderer: MapRenderer;
    options: Options;
    // private playerRenderers: JavaMap<PlayerModelType, AvatarRenderer<AbstractClientPlayer>>;
    // private playerSkinRenderCache: PlayerSkinRenderCache;
    // private renderers: JavaMap<EntityType<any>, EntityRenderer<any, any>>;
    textureManager: TextureManager;
    // private viaFabricPlus$boatRenderer: BoatRenderer1_8;
    distanceToSqr(entity: Entity): number;
    extractEntity<E extends Entity>(entity: E, partialTicks: number): EntityRenderState;
    fabric$getId(): Identifier;
    // private fillRendererDetails<S extends EntityRenderState>(renderer: EntityRenderer<any, S>, report: CrashReport): CrashReportCategory;
    // private getAvatarRenderer<T extends Avatar & ClientAvatarEntity>(renderers: JavaMap<PlayerModelType, AvatarRenderer<T>>, entity: T): AvatarRenderer<T>;
    getItemInHandRenderer(): ItemInHandRenderer;
    getName(): string;
    getPackedLightCoords<E extends Entity>(entity: E, partialTickTime: number): number;
    getPlayerRenderer(player: AbstractClientPlayer): AvatarRenderer<AbstractClientPlayer>;
    getRenderer<S extends EntityRenderState>(entityRenderState: S): EntityRenderer<any, S>;
    getRenderer<T extends Entity>(entity: T): EntityRenderer<T, any>;
    onResourceManagerReload(resourceManager: ResourceManager): void;
    prepare(camera: Camera, crosshairPickEntity: Entity): void;
    reload(currentReload: PreparableReloadListener$SharedState, taskExecutor: Executor, preparationBarrier: (param0: Object | null) => CompletableFuture<Object>, reloadExecutor: Executor): CompletableFuture<void>;
    resetCamera(): void;
    shouldRender<E extends Entity>(entity: E, culler: Frustum, camX: number, camY: number, camZ: number): boolean;
    submit<S extends EntityRenderState>(renderState: S, camera: CameraRenderState, x: number, y: number, z: number, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector): void;
}