import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CustomDamageHandler } from '../../../../net/fabricmc/fabric/api/item/v1/CustomDamageHandler.d.ts'
import type { EquipmentSlotProvider } from '../../../../net/fabricmc/fabric/api/item/v1/EquipmentSlotProvider.d.ts'
import type { FabricItem$Properties } from '../../../../net/fabricmc/fabric/api/item/v1/FabricItem$Properties.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { HolderLookup$Provider } from '../../../../net/minecraft/core/HolderLookup$Provider.d.ts'
import type { DataComponentInitializers$Initializer } from '../../../../net/minecraft/core/component/DataComponentInitializers$Initializer.d.ts'
import type { DataComponentInitializers$SingleComponentInitializer } from '../../../../net/minecraft/core/component/DataComponentInitializers$SingleComponentInitializer.d.ts'
import type { DataComponentMap$Builder } from '../../../../net/minecraft/core/component/DataComponentMap$Builder.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { DependantName } from '../../../../net/minecraft/resources/DependantName.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { EquipmentSlot } from '../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { FeatureFlag } from '../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
import type { FoodProperties } from '../../../../net/minecraft/world/food/FoodProperties.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemStackTemplate } from '../../../../net/minecraft/world/item/ItemStackTemplate.d.ts'
import type { JukeboxSong } from '../../../../net/minecraft/world/item/JukeboxSong.d.ts'
import type { Rarity } from '../../../../net/minecraft/world/item/Rarity.d.ts'
import type { ToolMaterial } from '../../../../net/minecraft/world/item/ToolMaterial.d.ts'
import type { Consumable } from '../../../../net/minecraft/world/item/component/Consumable.d.ts'
import type { ItemAttributeModifiers } from '../../../../net/minecraft/world/item/component/ItemAttributeModifiers.d.ts'
import type { ArmorMaterial } from '../../../../net/minecraft/world/item/equipment/ArmorMaterial.d.ts'
import type { ArmorType } from '../../../../net/minecraft/world/item/equipment/ArmorType.d.ts'
import type { TrimMaterial } from '../../../../net/minecraft/world/item/equipment/trim/TrimMaterial.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
export class Item$Properties extends Object implements FabricItem$Properties {
    constructor()
    // private componentInitializer: (param0: Item, param1: DataComponentMap$Builder, param2: HolderLookup$Provider) => void;
    // private craftingRemainingItem: ItemStackTemplate;
    // private descriptionId: (param0: Item) => string;
    // private id: ResourceKey<Item>;
    // private model: (param0: Item) => Identifier;
    // private requiredFeatures: FeatureFlagSet;
    attributes(attributes: ItemAttributeModifiers): Item$Properties;
    axe(material: ToolMaterial, attackDamageBaseline: number, attackSpeedBaseline: number): Item$Properties;
    component<T extends Object | number | string | boolean>(type: DataComponentType<T>, value: T): Item$Properties;
    craftRemainder(craftingRemainingItem: Item): Item$Properties;
    craftRemainder(craftingRemainingItem: ItemStackTemplate): Item$Properties;
    customDamage(arg0: (param0: ItemStack, param1: number, param2: LivingEntity, param3: EquipmentSlot, param4: () => void) => kotlin.Int): Item$Properties;
    delayedComponent(type: DataComponentType<T>, initializer: (param0: T) => unknown): Item$Properties;
    delayedHolderComponent(type: DataComponentType<Holder<T>>, valueKey: ResourceKey<T>): Item$Properties;
    durability(maxDamage: number): Item$Properties;
    effectiveDescriptionId(): string;
    effectiveModel(): Identifier;
    enchantable(value: number): Item$Properties;
    equipmentSlot(arg0: (param0: LivingEntity, param1: ItemStack) => net.minecraft.world.entity.EquipmentSlot): Item$Properties;
    equippable(slot: EquipmentSlot): Item$Properties;
    equippableUnswappable(slot: EquipmentSlot): Item$Properties;
    // private finalizeInitializer(name: Component, model: Identifier): (param0: Item, param1: DataComponentMap$Builder, param2: HolderLookup$Provider) => void;
    fireResistant(): Item$Properties;
    food(foodProperties: FoodProperties): Item$Properties;
    food(foodProperties: FoodProperties, consumable: Consumable): Item$Properties;
    hoe(material: ToolMaterial, attackDamageBaseline: number, attackSpeedBaseline: number): Item$Properties;
    horseArmor(material: ArmorMaterial): Item$Properties;
    humanoidArmor(material: ArmorMaterial, type: ArmorType): Item$Properties;
    itemId(): ResourceKey<Item>;
    itemId(): ResourceKey<Object>;
    itemIdOrThrow(): ResourceKey<Item>;
    jukeboxPlayable(song: ResourceKey<JukeboxSong>): Item$Properties;
    modelId(arg0: Identifier): Item$Properties;
    nautilusArmor(material: ArmorMaterial): Item$Properties;
    overrideDescription(descriptionId: string): Item$Properties;
    pickaxe(material: ToolMaterial, attackDamageBaseline: number, attackSpeedBaseline: number): Item$Properties;
    rarity(rarity: Rarity): Item$Properties;
    repairable(repairItems: TagKey<Item>): Item$Properties;
    repairable(repairItem: Item): Item$Properties;
    requiredFeatures(flags: FeatureFlag[]): Item$Properties;
    requiredFeatures(flags: FeatureFlagSet): Item$Properties;
    setId(id: ResourceKey<Item>): Item$Properties;
    shovel(material: ToolMaterial, attackDamageBaseline: number, attackSpeedBaseline: number): Item$Properties;
    spawnEgg(type: EntityType<Object>): Item$Properties;
    spear(material: ToolMaterial, attackDuration: number, damageMultiplier: number, delay: number, dismountTime: number, dismountThreshold: number, knockbackTime: number, knockbackThreshold: number, damageTime: number, damageThreshold: number): Item$Properties;
    stacksTo(max: number): Item$Properties;
    sword(material: ToolMaterial, attackDamageBaseline: number, attackSpeedBaseline: number): Item$Properties;
    tool(material: ToolMaterial, minesEfficiently: TagKey<Block>, attackDamageBaseline: number, attackSpeedBaseline: number, disableBlockingSeconds: number): Item$Properties;
    trimMaterial(material: ResourceKey<TrimMaterial>): Item$Properties;
    useBlockDescriptionPrefix(): Item$Properties;
    useCooldown(seconds: number): Item$Properties;
    useItemDescriptionPrefix(): Item$Properties;
    usingConvertsTo(item: Item): Item$Properties;
    wolfArmor(material: ArmorMaterial): Item$Properties;
}