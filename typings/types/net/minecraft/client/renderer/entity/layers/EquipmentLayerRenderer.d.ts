import type { PoseStack } from '../../../../../../com/mojang/blaze3d/vertex/PoseStack.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Model } from '../../../../../../net/minecraft/client/model/Model.d.ts'
import type { SubmitNodeCollector } from '../../../../../../net/minecraft/client/renderer/SubmitNodeCollector.d.ts'
import type { EquipmentLayerRenderer$LayerTextureKey } from '../../../../../../net/minecraft/client/renderer/entity/layers/EquipmentLayerRenderer$LayerTextureKey.d.ts'
import type { EquipmentLayerRenderer$TrimSpriteKey } from '../../../../../../net/minecraft/client/renderer/entity/layers/EquipmentLayerRenderer$TrimSpriteKey.d.ts'
import type { TextureAtlas } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlas.d.ts'
import type { TextureAtlasSprite } from '../../../../../../net/minecraft/client/renderer/texture/TextureAtlasSprite.d.ts'
import type { EquipmentAssetManager } from '../../../../../../net/minecraft/client/resources/model/EquipmentAssetManager.d.ts'
import type { EquipmentClientInfo$LayerType } from '../../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$LayerType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { EquipmentAsset } from '../../../../../../net/minecraft/world/item/equipment/EquipmentAsset.d.ts'
export class EquipmentLayerRenderer extends Object {
    constructor(equipmentAssets: EquipmentAssetManager, armorTrimAtlas: TextureAtlas)
    // private equipmentAssets: EquipmentAssetManager;
    // private layerTextureLookup: (param0: EquipmentLayerRenderer$LayerTextureKey) => Identifier;
    // private trimSpriteLookup: (param0: EquipmentLayerRenderer$TrimSpriteKey) => TextureAtlasSprite;
    renderLayers<S extends Object | number | string | boolean>(layerType: EquipmentClientInfo$LayerType, equipmentAssetId: ResourceKey<EquipmentAsset>, model: Model<S>, state: S, itemStack: ItemStack, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, outlineColor: number): void;
    renderLayers<S extends Object | number | string | boolean>(layerType: EquipmentClientInfo$LayerType, equipmentAssetId: ResourceKey<EquipmentAsset>, model: Model<S>, state: S, itemStack: ItemStack, poseStack: PoseStack, submitNodeCollector: SubmitNodeCollector, lightCoords: number, playerTextureOverride: Identifier, outlineColor: number, order: number): void;
}