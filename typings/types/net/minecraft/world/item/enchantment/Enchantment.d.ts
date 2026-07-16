import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { TypedDataComponent } from '../../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemInstance } from '../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ConditionalEffect } from '../../../../../net/minecraft/world/item/enchantment/ConditionalEffect.d.ts'
import type { EnchantedItemInUse } from '../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { Enchantment$Builder } from '../../../../../net/minecraft/world/item/enchantment/Enchantment$Builder.d.ts'
import type { Enchantment$Cost } from '../../../../../net/minecraft/world/item/enchantment/Enchantment$Cost.d.ts'
import type { Enchantment$EnchantmentDefinition } from '../../../../../net/minecraft/world/item/enchantment/Enchantment$EnchantmentDefinition.d.ts'
import type { Enchantment$FloatAction } from '../../../../../net/minecraft/world/item/enchantment/Enchantment$FloatAction.d.ts'
import type { Enchantment$GenericAction } from '../../../../../net/minecraft/world/item/enchantment/Enchantment$GenericAction.d.ts'
import type { EnchantmentTarget } from '../../../../../net/minecraft/world/item/enchantment/EnchantmentTarget.d.ts'
import type { TargetedConditionalEffect } from '../../../../../net/minecraft/world/item/enchantment/TargetedConditionalEffect.d.ts'
import type { EnchantmentEntityEffect } from '../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentEntityEffect.d.ts'
import type { EnchantmentValueEffect } from '../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentValueEffect.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { LootContext } from '../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { MutableFloat } from '../../../../../org/apache/commons/lang3/mutable/MutableFloat.d.ts'
export class Enchantment extends Record {
    static CODEC: Codec<Holder<Enchantment>>;
    static DIRECT_CODEC: Codec<Enchantment>;
    static MAX_LEVEL: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<Enchantment>>;
    static applyEffects<T extends unknown>(parameffects: ConditionalEffect<T>[], paramfilterData: LootContext, paramaction: (param0: T) => void): void;
    static applyEffects<T extends unknown>(parameffects: ConditionalEffect<T>[], paramfilterData: LootContext, paramvalue: MutableFloat, paramaction: (param0: T, param1: number) => number): void;
    static areCompatible(paramenchantment: Holder<Enchantment>, paramother: Holder<Enchantment>): boolean;
    static blockHitContext(paramserverLevel: ServerLevel, paramenchantmentLevel: number, paramentity: Entity, paramposition: Vec3, paramhitBlock: BlockState): LootContext;
    static constantCost(parambase: number): Enchantment$Cost;
    static damageContext(paramserverLevel: ServerLevel, paramenchantmentLevel: number, paramvictim: Entity, paramsource: DamageSource): LootContext;
    static definition(paramsupportedItems: Holder<Item>[], paramweight: number, parammaxLevel: number, paramminCost: Enchantment$Cost, parammaxCost: Enchantment$Cost, paramanvilCost: number, ...paramslots: EquipmentSlot[][]): Enchantment$EnchantmentDefinition;
    static definition(paramsupportedItems: Holder<Item>[], paramprimaryItems: Holder<Item>[], paramweight: number, parammaxLevel: number, paramminCost: Enchantment$Cost, parammaxCost: Enchantment$Cost, paramanvilCost: number, ...paramslots: EquipmentSlot[][]): Enchantment$EnchantmentDefinition;
    static doPostAttack(parameffect: TargetedConditionalEffect<EnchantmentEntityEffect>, paramserverLevel: ServerLevel, paramenchantmentLevel: number, paramitem: EnchantedItemInUse, paramvictim: Entity, paramdamageSource: DamageSource): void;
    static dynamicCost(parambase: number, paramperLevel: number): Enchantment$Cost;
    static enchantment(paramdefinition: Enchantment$EnchantmentDefinition): Enchantment$Builder;
    static entityContext(paramserverLevel: ServerLevel, paramenchantmentLevel: number, paramentity: Entity, paramposition: Vec3): LootContext;
    static getFullname(paramenchantment: Holder<Enchantment>, paramlevel: number): Component;
    static itemContext(paramserverLevel: ServerLevel, paramenchantmentLevel: number, paramitemStack: ItemInstance): LootContext;
    static locationContext(paramserverLevel: ServerLevel, paramenchantmentLevel: number, paramentity: Entity, paramactive: boolean): LootContext;
    constructor(description: Component, definition: Enchantment$EnchantmentDefinition, exclusiveSet: Holder<Enchantment>[], effects: TypedDataComponent<Object>[])
    // private definition: Enchantment$EnchantmentDefinition;
    // private description: Component;
    // private effects: TypedDataComponent<Object>[];
    // private exclusiveSet: Holder<Enchantment>[];
    canEnchant(itemStack: ItemStack): boolean;
    definition(): Enchantment$EnchantmentDefinition;
    description(): Component;
    doPostAttack(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, forTarget: EnchantmentTarget, victim: Entity, damageSource: DamageSource): void;
    doPostPiercingAttack(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, user: Entity): void;
    effects(): TypedDataComponent<Object>[];
    equals(o: Object | null): boolean;
    exclusiveSet(): Holder<Enchantment>[];
    getAnvilCost(): number;
    getEffects<T extends unknown>(type: DataComponentType<T[]>): T[];
    getMaxCost(level: number): number;
    getMaxLevel(): number;
    getMinCost(level: number): number;
    getMinLevel(): number;
    getSlotItems(entity: LivingEntity): Map<EquipmentSlot, ItemStack>;
    getSupportedItems(): Holder<Item>[];
    getWeight(): number;
    hashCode(): number;
    isImmuneToDamage(serverLevel: ServerLevel, enchantmentLevel: number, victim: Entity, source: DamageSource): boolean;
    isPrimaryItem(item: ItemStack): boolean;
    isSupportedItem(item: ItemStack): boolean;
    matchingSlot(slot: EquipmentSlot): boolean;
    modifyAmmoCount(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, change: MutableFloat): void;
    modifyArmorEffectivness(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, victim: Entity, damageSource: DamageSource, amount: MutableFloat): void;
    modifyBlockExperience(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, count: MutableFloat): void;
    modifyCrossbowChargeTime(random: RandomSource, enchantmentLevel: number, time: MutableFloat): void;
    modifyDamage(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, victim: Entity, damageSource: DamageSource, amount: MutableFloat): void;
    modifyDamageFilteredValue(effectType: DataComponentType<ConditionalEffect<EnchantmentValueEffect>[]>, serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, victim: Entity, damageSource: DamageSource, value: MutableFloat): void;
    modifyDamageProtection(serverLevel: ServerLevel, enchantmentLevel: number, item: ItemStack, victim: Entity, source: DamageSource, protection: MutableFloat): void;
    modifyDurabilityChange(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, change: MutableFloat): void;
    modifyDurabilityToRepairFromXp(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, change: MutableFloat): void;
    modifyEntityFilteredValue(effectType: DataComponentType<ConditionalEffect<EnchantmentValueEffect>[]>, serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, entity: Entity, value: MutableFloat): void;
    modifyFallBasedDamage(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, victim: Entity, damageSource: DamageSource, amount: MutableFloat): void;
    modifyFishingLuckBonus(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, fisher: Entity, luck: MutableFloat): void;
    modifyFishingTimeReduction(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, fisher: Entity, timeReduction: MutableFloat): void;
    modifyItemFilteredCount(effectType: DataComponentType<ConditionalEffect<EnchantmentValueEffect>[]>, serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemInstance, value: MutableFloat): void;
    modifyKnockback(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, victim: Entity, damageSource: DamageSource, amount: MutableFloat): void;
    modifyMobExperience(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, killer: Entity, experience: MutableFloat): void;
    modifyPiercingCount(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, count: MutableFloat): void;
    modifyProjectileCount(serverLevel: ServerLevel, enchantmentLevel: number, weapon: ItemStack, shooter: Entity, count: MutableFloat): void;
    modifyProjectileSpread(serverLevel: ServerLevel, enchantmentLevel: number, weapon: ItemStack, shooter: Entity, angle: MutableFloat): void;
    modifyTridentReturnToOwnerAcceleration(serverLevel: ServerLevel, enchantmentLevel: number, itemStack: ItemStack, trident: Entity, count: MutableFloat): void;
    modifyTridentSpinAttackStrength(random: RandomSource, enchantmentLevel: number, strength: MutableFloat): void;
    modifyUnfilteredValue(component: DataComponentType<EnchantmentValueEffect>, random: RandomSource, enchantmentLevel: number, value: MutableFloat): void;
    onHitBlock(serverLevel: ServerLevel, enchantmentLevel: number, weapon: EnchantedItemInUse, projectile: Entity, position: Vec3, hitBlock: BlockState): void;
    onProjectileSpawned(serverLevel: ServerLevel, enchantmentLevel: number, weapon: EnchantedItemInUse, projectile: Entity): void;
    runLocationChangedEffects(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: LivingEntity): void;
    stopLocationBasedEffects(enchantmentLevel: number, item: EnchantedItemInUse, entity: LivingEntity): void;
    tick(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity): void;
    toString(): string;
}