import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Predicate } from '../../../../java/util/function/Predicate.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { InteractionHand } from '../../../../net/minecraft/world/InteractionHand.d.ts'
import type { InteractionResult } from '../../../../net/minecraft/world/InteractionResult.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Projectile } from '../../../../net/minecraft/world/entity/projectile/Projectile.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemUseAnimation } from '../../../../net/minecraft/world/item/ItemUseAnimation.d.ts'
import type { ProjectileWeaponItem } from '../../../../net/minecraft/world/item/ProjectileWeaponItem.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class CrossbowItem extends ProjectileWeaponItem {
    static ABSOLUTE_MAX_STACK_SIZE: number;
    static ARROW_ONLY: (param0: ItemStack) => boolean;
    static ARROW_OR_FIREWORK: (param0: ItemStack) => boolean;
    static BASE_ATTACK_DAMAGE_ID: Identifier;
    static BASE_ATTACK_SPEED_ID: Identifier;
    static BY_BLOCK: Map<Block, Item>;
    static CODEC: Codec<Holder<Item>>;
    static CODEC_WITH_BOUND_COMPONENTS: Codec<Holder<Item>>;
    static DEFAULT_LIGHT_COLOR: Vector3f;
    static DEFAULT_MAX_STACK_SIZE: number;
    static DEFAULT_RANGE: number;
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    static MAX_BAR_WIDTH: number;
    static MOB_ARROW_POWER: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<Item>>;
    static byBlock(paramblock: Block): Item;
    static byId(paramid: number): Item;
    static getChargeDuration(paramcrossbow: ItemStack, paramuser: LivingEntity): number;
    static getHeldProjectile(paramentity: LivingEntity, paramvalid: (param0: ItemStack) => boolean): ItemStack;
    static getId(paramitem: Item): number;
    static isCharged(paramitemStack: ItemStack): boolean;
    constructor(properties: Item$Properties)
    // private midLoadSoundPlayed: boolean;
    // private startSoundPlayed: boolean;
    createProjectile(level: Level, shooter: LivingEntity, heldItem: ItemStack, projectile: ItemStack, isCrit: boolean): Projectile;
    getAllSupportedProjectiles(): (param0: ItemStack) => boolean;
    getDefaultProjectileRange(): number;
    getDurabilityUse(projectile: ItemStack): number;
    getSupportedHeldProjectiles(): (param0: ItemStack) => boolean;
    getUseAnimation(itemStack: ItemStack): ItemUseAnimation;
    getUseDuration(itemStack: ItemStack, user: LivingEntity): number;
    onUseTick(level: Level, entity: LivingEntity, itemStack: ItemStack, ticksRemaining: number): void;
    performShooting(level: Level, shooter: LivingEntity, hand: InteractionHand, weapon: ItemStack, power: number, uncertainty: number, targetOverride: LivingEntity): void;
    releaseUsing(itemStack: ItemStack, level: Level, entity: LivingEntity, remainingTime: number): boolean;
    shootProjectile(livingEntity: LivingEntity, projectileEntity: Projectile, index: number, power: number, uncertainty: number, angle: number, targetOverride: LivingEntity): void;
    use(level: Level, player: Player, hand: InteractionHand): InteractionResult;
    useOnRelease(itemStack: ItemStack): boolean;
}