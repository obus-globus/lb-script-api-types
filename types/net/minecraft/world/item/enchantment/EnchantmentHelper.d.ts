import type { Pair } from '../../../../../com/mojang/datafixers/util/Pair.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Stream } from '../../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { TagKey } from '../../../../../net/minecraft/tags/TagKey.d.ts'
import type { RandomSource } from '../../../../../net/minecraft/util/RandomSource.d.ts'
import type { DifficultyInstance } from '../../../../../net/minecraft/world/DifficultyInstance.d.ts'
import type { DamageSource } from '../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { LivingEntity } from '../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { Projectile } from '../../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemInstance } from '../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { EnchantedItemInUse } from '../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { Enchantment } from '../../../../../net/minecraft/world/item/enchantment/Enchantment.d.ts'
import type { EnchantmentHelper$EnchantmentInSlotVisitor } from '../../../../../net/minecraft/world/item/enchantment/EnchantmentHelper$EnchantmentInSlotVisitor.d.ts'
import type { EnchantmentHelper$EnchantmentVisitor } from '../../../../../net/minecraft/world/item/enchantment/EnchantmentHelper$EnchantmentVisitor.d.ts'
import type { EnchantmentInstance } from '../../../../../net/minecraft/world/item/enchantment/EnchantmentInstance.d.ts'
import type { ItemEnchantments } from '../../../../../net/minecraft/world/item/enchantment/ItemEnchantments.d.ts'
import type { ItemEnchantments$Mutable } from '../../../../../net/minecraft/world/item/enchantment/ItemEnchantments$Mutable.d.ts'
import type { EnchantmentProvider } from '../../../../../net/minecraft/world/item/enchantment/providers/EnchantmentProvider.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EnchantmentHelper extends Object {
    static canStoreEnchantments(paramitemStack: ItemStack): boolean;
    static createBook(paramenchant: EnchantmentInstance): ItemStack;
    static doPostAttackEffects(paramserverLevel: ServerLevel, paramvictim: Entity, paramdamageSource: DamageSource): void;
    static doPostAttackEffectsWithItemSource(paramserverLevel: ServerLevel, paramvictim: Entity, paramdamageSource: DamageSource, paramsource: ItemStack): void;
    static doPostAttackEffectsWithItemSourceOnBreak(paramserverLevel: ServerLevel, paramvictim: Entity, paramdamageSource: DamageSource, paramsource: ItemStack, paramattackerlessOnBreak: (param0: Item) => void): void;
    static doPostPiercingAttackEffects(paramserverLevel: ServerLevel, paramuser: LivingEntity): void;
    static enchantItem(paramrandom: RandomSource, paramitemStack: ItemStack, paramenchantmentCost: number, paramsource: Stream<Object>): ItemStack;
    static enchantItem(paramrandom: RandomSource, paramitemStack: ItemStack, paramenchantmentCost: number, paramregistryAccess: RegistryAccess, paramset: Optional<Object>): ItemStack;
    static enchantItemFromProvider(paramitemStack: ItemStack, paramregistryAccess: RegistryAccess, paramproviderKey: ResourceKey<EnchantmentProvider>, paramdifficulty: DifficultyInstance, paramrandom: RandomSource): void;
    static filterCompatibleEnchantments(paramenchants: EnchantmentInstance[], paramtarget: EnchantmentInstance): void;
    static forEachModifier(paramitemStack: ItemStack, paramslot: EquipmentSlot, paramconsumer: (param0: Object | null, param1: AttributeModifier) => void): void;
    static forEachModifier(paramitemStack: ItemStack, paramslot: EquipmentSlot[], paramconsumer: (param0: Object | null, param1: AttributeModifier) => void): void;
    static getAvailableEnchantmentResults(paramvalue: number, paramitemStack: ItemStack, paramsource: Stream<Object>): EnchantmentInstance[];
    static getComponentType(paramitemStack: ItemStack): DataComponentType<ItemEnchantments>;
    static getDamageProtection(paramserverLevel: ServerLevel, paramvictim: LivingEntity, paramsource: DamageSource): number;
    static getEnchantmentCost(paramrandom: RandomSource, paramslot: number, parambookcases: number, paramitemStack: ItemStack): number;
    static getEnchantmentLevel(paramenchantment: Holder<Enchantment>, paramentity: LivingEntity): number;
    static getEnchantmentsForCrafting(paramitemStack: ItemStack): ItemEnchantments;
    static getFishingLuckBonus(paramserverLevel: ServerLevel, paramrod: ItemStack, paramfisher: Entity): number;
    static getFishingTimeReduction(paramserverLevel: ServerLevel, paramrod: ItemStack, paramfisher: Entity): number;
    static getHighestLevel(paramitem: ItemStack, parameffectType: DataComponentType<Object>): Pair<Object, number>;
    static getItemEnchantmentLevel(paramenchantment: Holder<Enchantment>, parampiece: ItemInstance): number;
    static getPiercingCount(paramserverLevel: ServerLevel, paramweapon: ItemStack, paramammo: ItemStack): number;
    static getRandomItemWith(paramcomponentType: DataComponentType<Object>, paramsource: LivingEntity, parampredicate: (param0: ItemStack) => kotlin.Boolean): Optional<EnchantedItemInUse>;
    static getTridentReturnToOwnerAcceleration(paramserverLevel: ServerLevel, paramweapon: ItemStack, paramtrident: Entity): number;
    static getTridentSpinAttackStrength(paramtrident: ItemStack, paramholder: LivingEntity): number;
    static has(paramitem: ItemStack, parameffectType: DataComponentType<Object>): boolean;
    static hasAnyEnchantments(paramitemStack: ItemStack): boolean;
    static hasTag(paramitem: ItemStack, paramtag: TagKey<Enchantment>): boolean;
    static isEnchantmentCompatible(paramenchants: E[], paramtarget: Holder<Enchantment>): boolean;
    static isImmuneToDamage(paramserverLevel: ServerLevel, paramvictim: LivingEntity, paramsource: DamageSource): boolean;
    static modifyArmorEffectiveness(paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramvictim: Entity, paramdamageSource: DamageSource, paramarmorFraction: number): number;
    static modifyCrossbowChargingTime(paramcrossbow: ItemStack, paramholder: LivingEntity, paramtime: number): number;
    static modifyDamage(paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramvictim: Entity, paramdamageSource: DamageSource, paramdamage: number): number;
    static modifyDurabilityToRepairFromXp(paramserverLevel: ServerLevel, paramitem: ItemStack, paramdurability: number): number;
    static modifyFallBasedDamage(paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramvictim: Entity, paramdamageSource: DamageSource, paramdamage: number): number;
    static modifyKnockback(paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramvictim: Entity, paramdamageSource: DamageSource, paramknockback: number): number;
    static onHitBlock(paramserverLevel: ServerLevel, paramweapon: ItemStack, paramowner: LivingEntity, paramentity: Entity, paramslot: EquipmentSlot, paramhitLocation: Vec3, paramhitBlock: BlockState, paramonBreak: (param0: Item) => void): void;
    static onProjectileSpawned(paramserverLevel: ServerLevel, paramweapon: ItemStack, paramprojectileEntity: Projectile, paramonBreak: (param0: Item) => void): void;
    static pickHighestLevel(paramitemStack: ItemStack, paramcomponentType: DataComponentType<Object>): Optional<Object>;
    static processAmmoUse(paramserverLevel: ServerLevel, paramweapon: ItemStack, paramammo: ItemStack, paramamount: number): number;
    static processBlockExperience(paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramamount: number): number;
    static processDurabilityChange(paramserverLevel: ServerLevel, paramitemStack: ItemStack, paramamount: number): number;
    static processEquipmentDropChance(paramserverLevel: ServerLevel, paramentity: LivingEntity, paramkillingBlow: DamageSource, paramchance: number): number;
    static processMobExperience(paramserverLevel: ServerLevel, paramkiller: Entity, paramkilled: Entity, paramamount: number): number;
    static processProjectileCount(paramserverLevel: ServerLevel, paramweapon: ItemStack, paramshooter: Entity, paramcount: number): number;
    static processProjectileSpread(paramserverLevel: ServerLevel, paramweapon: ItemStack, paramshooter: Entity, paramangle: number): number;
    static runIterationOnEquipment(paramowner: LivingEntity, parammethod: (param0: Holder<Enchantment>, param1: number, param2: EnchantedItemInUse) => void): void;
    static runIterationOnItem(parampiece: ItemStack, paramslot: EquipmentSlot, paramowner: LivingEntity, parammethod: (param0: Holder<Enchantment>, param1: number, param2: EnchantedItemInUse) => void): void;
    static runIterationOnItem(parampiece: ItemStack, parammethod: (param0: Holder<Enchantment>, param1: number) => void): void;
    static runLocationChangedEffects(paramserverLevel: ServerLevel, paramentity: LivingEntity): void;
    static runLocationChangedEffects(paramserverLevel: ServerLevel, paramstack: ItemStack, paramentity: LivingEntity, paramslot: EquipmentSlot): void;
    static selectEnchantment(paramrandom: RandomSource, paramitemStack: ItemStack, paramenchantmentCost: number, paramsource: Stream<Object>): EnchantmentInstance[];
    static setEnchantments(paramitemStack: ItemStack, paramenchantments: ItemEnchantments): void;
    static stopLocationBasedEffects(paramentity: LivingEntity): void;
    static stopLocationBasedEffects(paramstack: ItemStack, paramentity: LivingEntity, paramslot: EquipmentSlot): void;
    static tickEffects(paramserverLevel: ServerLevel, paramentity: LivingEntity): void;
    static updateEnchantments(paramitemStack: ItemStack, paramconsumer: (param0: ItemEnchantments$Mutable) => void): ItemEnchantments;
    constructor()
}