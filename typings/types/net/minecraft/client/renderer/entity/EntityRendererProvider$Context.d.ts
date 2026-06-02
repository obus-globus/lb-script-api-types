import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { EntityModelSet } from '../../../../../net/minecraft/client/model/geom/EntityModelSet.d.ts'
import type { ModelLayerLocation } from '../../../../../net/minecraft/client/model/geom/ModelLayerLocation.d.ts'
import type { ModelPart } from '../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { MapRenderer } from '../../../../../net/minecraft/client/renderer/MapRenderer.d.ts'
import type { PlayerSkinRenderCache } from '../../../../../net/minecraft/client/renderer/PlayerSkinRenderCache.d.ts'
import type { BlockModelResolver } from '../../../../../net/minecraft/client/renderer/block/BlockModelResolver.d.ts'
import type { EntityRenderDispatcher } from '../../../../../net/minecraft/client/renderer/entity/EntityRenderDispatcher.d.ts'
import type { EquipmentLayerRenderer } from '../../../../../net/minecraft/client/renderer/entity/layers/EquipmentLayerRenderer.d.ts'
import type { ItemModelResolver } from '../../../../../net/minecraft/client/renderer/item/ItemModelResolver.d.ts'
import type { TextureAtlas } from '../../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { EquipmentAssetManager } from '../../../../../net/minecraft/client/resources/model/EquipmentAssetManager.d.ts'
import type { AtlasManager } from '../../../../../net/minecraft/client/resources/model/sprite/AtlasManager.d.ts'
import type { SpriteGetter } from '../../../../../net/minecraft/client/resources/model/sprite/SpriteGetter.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export class EntityRendererProvider$Context extends Object {
    constructor(entityRenderDispatcher: EntityRenderDispatcher, blockModelResolver: BlockModelResolver, itemModelResolver: ItemModelResolver, mapRenderer: MapRenderer, resourceManager: ResourceManager, modelSet: EntityModelSet, equipmentAssets: EquipmentAssetManager, atlasManager: AtlasManager, font: Font, playerSkinRenderCache: PlayerSkinRenderCache)
    // private atlasManager: AtlasManager;
    readonly blockModelResolver: BlockModelResolver;
    readonly entityRenderDispatcher: EntityRenderDispatcher;
    readonly equipmentAssets: EquipmentAssetManager;
    readonly equipmentRenderer: EquipmentLayerRenderer;
    readonly font: Font;
    readonly itemModelResolver: ItemModelResolver;
    readonly mapRenderer: MapRenderer;
    readonly modelSet: EntityModelSet;
    readonly playerSkinRenderCache: PlayerSkinRenderCache;
    readonly resourceManager: ResourceManager;
    bakeLayer(id: ModelLayerLocation): ModelPart;
    getAtlas(sheet: Identifier): TextureAtlas;
    getBlockModelResolver(): BlockModelResolver;
    getEntityRenderDispatcher(): EntityRenderDispatcher;
    getEquipmentAssets(): EquipmentAssetManager;
    getEquipmentRenderer(): EquipmentLayerRenderer;
    getFont(): Font;
    getItemModelResolver(): ItemModelResolver;
    getMapRenderer(): MapRenderer;
    getModelSet(): EntityModelSet;
    getPlayerSkinRenderCache(): PlayerSkinRenderCache;
    getResourceManager(): ResourceManager;
    getSprites(): SpriteGetter;
}