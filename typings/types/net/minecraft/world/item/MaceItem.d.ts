import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { Item$Properties } from '../../../../net/minecraft/world/item/Item$Properties.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemAttributeModifiers } from '../../../../net/minecraft/world/item/component/ItemAttributeModifiers.d.ts'
import type { Tool } from '../../../../net/minecraft/world/item/component/Tool.d.ts'
import type { Block } from '../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class MaceItem extends Item {
    static ABSOLUTE_MAX_STACK_SIZE: number;
    static BASE_ATTACK_DAMAGE_ID: Identifier;
    static BASE_ATTACK_SPEED_ID: Identifier;
    static BY_BLOCK: JavaMap<Block, Item>;
    static CODEC: Codec<Holder<Item>>;
    static CODEC_WITH_BOUND_COMPONENTS: Codec<Holder<Item>>;
    static DEFAULT_LIGHT_COLOR: Vector3f;
    static DEFAULT_MAX_STACK_SIZE: number;
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    static MAX_BAR_WIDTH: number;
    static SMASH_ATTACK_FALL_THRESHOLD: number;
    static SMASH_ATTACK_KNOCKBACK_RADIUS: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<Item>>;
    static byBlock(paramblock: Block): Item;
    static byId(paramid: number): Item;
    static canSmashAttack(paramattacker: LivingEntity): boolean;
    static createAttributes(): ItemAttributeModifiers;
    static createToolProperties(): Tool;
    static getId(paramitem: Item): number;
    constructor(properties: Item$Properties)
    // private calculateImpactPosition(attacker: LivingEntity): Vec3;
    getAttackDamageBonus(victim: Entity, ignoredDamage: number, damageSource: DamageSource): number;
    getItemDamageSource(attacker: LivingEntity): DamageSource;
    hurtEnemy(itemStack: ItemStack, mob: LivingEntity, attacker: LivingEntity): void;
    postHurtEnemy(itemStack: ItemStack, mob: LivingEntity, attacker: LivingEntity): void;
}