import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { TagKey } from '../../../../net/minecraft/tags/TagKey.d.ts'
import type { DamageType } from '../../../../net/minecraft/world/damagesource/DamageType.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vec3 } from '../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DamageSource extends Object {
    constructor(type: Holder<DamageType>)
    constructor(type: Holder<DamageType>, causingEntity: Entity)
    constructor(type: Holder<DamageType>, directEntity: Entity, causingEntity: Entity)
    constructor(type: Holder<DamageType>, damageSourcePosition: Vec3)
    // private causingEntity: Entity;
    // private damageSourcePosition: Vec3;
    readonly directEntity: Entity;
    // private type: Holder<DamageType>;
    getDirectEntity(): Entity;
    getEntity(): Entity;
    getFoodExhaustion(): number;
    getLocalizedDeathMessage(victim: LivingEntity): Component;
    getMsgId(): string;
    getSourcePosition(): Vec3;
    getWeaponItem(): ItemStack;
    is(typeKey: ResourceKey<DamageType>): boolean;
    is(tag: TagKey<DamageType>): boolean;
    isCreativePlayer(): boolean;
    isDirect(): boolean;
    scalesWithDifficulty(): boolean;
    sourcePositionRaw(): Vec3;
    toString(): string;
    type(): DamageType;
    typeHolder(): Holder<DamageType>;
}