import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ItemTintSource } from '../../../../../net/minecraft/client/color/item/ItemTintSource.d.ts'
import type { ItemModelGenerators$TrimMaterialData } from '../../../../../net/minecraft/client/data/models/ItemModelGenerators$TrimMaterialData.d.ts'
import type { ItemModelOutput } from '../../../../../net/minecraft/client/data/models/ItemModelOutput.d.ts'
import type { ModelInstance } from '../../../../../net/minecraft/client/data/models/model/ModelInstance.d.ts'
import type { ModelTemplate } from '../../../../../net/minecraft/client/data/models/model/ModelTemplate.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { RangeSelectItemModel$Entry } from '../../../../../net/minecraft/client/renderer/item/RangeSelectItemModel$Entry.d.ts'
import type { ConditionalItemModelProperty } from '../../../../../net/minecraft/client/renderer/item/properties/conditional/ConditionalItemModelProperty.d.ts'
import type { Material } from '../../../../../net/minecraft/client/resources/model/sprite/Material.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { EquipmentAsset } from '../../../../../net/minecraft/world/item/equipment/EquipmentAsset.d.ts'
export class ItemModelGenerators extends Object {
    static TRIM_MATERIAL_MODELS: ItemModelGenerators$TrimMaterialData[];
    static TRIM_PREFIX_BOOTS: Identifier;
    static TRIM_PREFIX_CHESTPLATE: Identifier;
    static TRIM_PREFIX_HELMET: Identifier;
    static TRIM_PREFIX_LEGGINGS: Identifier;
    static createFlatModelDispatch(paramflatModel: ItemModel$Unbaked, paraminHandModel: ItemModel$Unbaked): ItemModel$Unbaked;
    static prefixForSlotTrim(paramslotName: string): Identifier;
    constructor(itemModelOutput: ItemModelOutput, modelOutput: (param0: Identifier, param1: ModelInstance) => void)
    itemModelOutput: ItemModelOutput;
    modelOutput: (param0: Identifier, param1: ModelInstance) => void;
    addPotionTint(item: Item, model: Identifier): void;
    createCompassModels(compass: Item): RangeSelectItemModel$Entry[];
    createFlatItemModel(item: Item, suffix: string, template: ModelTemplate): Identifier;
    createFlatItemModel(item: Item, template: ModelTemplate): Identifier;
    createFlatItemModel(item: Item, textureDonor: Item, template: ModelTemplate): Identifier;
    declareCustomModelItem(item: Item): void;
    generateBooleanDispatch(item: Item, property: ConditionalItemModelProperty, modelOnTrue: ItemModel$Unbaked, modelOnFalse: ItemModel$Unbaked): void;
    generateBow(item: Item): void;
    generateBrush(item: Item): void;
    generateBundleCoverModel(item: Item, template: ModelTemplate, suffix: string): Identifier;
    generateBundleModels(bundle: Item): void;
    generateClockItem(clock: Item): void;
    generateCrossbow(item: Item): void;
    generateDyedItem(item: Item, defaultColor: number): void;
    generateElytra(item: Item): void;
    generateFishingRod(item: Item): void;
    generateFlatItem(item: Item, template: ModelTemplate): void;
    generateFlatItem(item: Item, textureDonor: Item, template: ModelTemplate): void;
    generateGoatHorn(item: Item): void;
    generateItemWithTintedBaseLayer(item: Item, defaultColor: number): void;
    generateItemWithTintedOverlay(item: Item, overlaySuffix: string, overlayTint: ItemTintSource): void;
    generateItemWithTintedOverlay(item: Item, overlayTint: ItemTintSource): void;
    generateLayeredItem(target: Identifier, layer0: Material, layer1: Material): Identifier;
    generateLayeredItem(target: Identifier, layer0: Material, layer1: Material, layer2: Material): void;
    generateLayeredItem(target: Item, layer0: Material, layer1: Material): Identifier;
    generatePotion(item: Item): void;
    generateRecoveryCompassItem(compass: Item): void;
    generateShield(item: Item): void;
    generateSpear(item: Item): void;
    generateSpyglass(item: Item): void;
    generateStandardCompassItem(compass: Item): void;
    generateTippedArrow(item: Item): void;
    generateTrident(item: Item): void;
    generateTrimmableItem(armor: Item, equipmentAssetId: ResourceKey<EquipmentAsset>, slotTrimPrefix: Identifier, hasDyedLayer: boolean): void;
    generateTwoLayerDyedItem(item: Item): void;
    run(): void;
}