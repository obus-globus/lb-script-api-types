import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { BiConsumer } from '../../../../java/util/function/BiConsumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricMobEffect } from '../../../../net/fabricmc/fabric/api/entity/event/v1/effect/FabricMobEffect.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { Component } from '../../../../net/minecraft/network/chat/Component.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffect$AttributeTemplate } from '../../../../net/minecraft/world/effect/MobEffect$AttributeTemplate.d.ts'
import type { MobEffectCategory } from '../../../../net/minecraft/world/effect/MobEffectCategory.d.ts'
import type { MobEffectInstance } from '../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
import type { Entity$RemovalReason } from '../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Attribute } from '../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeMap } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeMap.d.ts'
import type { AttributeModifier } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeModifier$Operation } from '../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier$Operation.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
import type { FeatureFlag } from '../../../../net/minecraft/world/flag/FeatureFlag.d.ts'
import type { FeatureFlagSet } from '../../../../net/minecraft/world/flag/FeatureFlagSet.d.ts'
export class MobEffect extends Object implements FabricMobEffect, FeatureElement {
    static CODEC: Codec<Object>;
    static FILTERED_REGISTRIES: (Object | null)[];
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(category: MobEffectCategory, color: number)
    constructor(category: MobEffectCategory, color: number, particleOptions: ParticleOptions)
    // private attributeModifiers: Map<Holder<Attribute>, MobEffect$AttributeTemplate>;
    readonly blendInDurationTicks: number;
    readonly blendOutAdvanceTicks: number;
    readonly blendOutDurationTicks: number;
    readonly category: MobEffectCategory;
    readonly color: number;
    readonly descriptionId: string;
    // private particleFactory: (param0: MobEffectInstance) => ParticleOptions;
    // private requiredFeatures: FeatureFlagSet;
    // private soundOnAdded: Optional<SoundEvent>;
    addAttributeModifier(attribute: Holder<Attribute>, id: Identifier, amount: number, operation: AttributeModifier$Operation): MobEffect;
    addAttributeModifiers(attributes: AttributeMap, amplifier: number): void;
    applyEffectTick(serverLevel: ServerLevel, mob: LivingEntity, amplification: number): boolean;
    applyInstantenousEffect(level: ServerLevel, source: Entity, owner: Entity, mob: LivingEntity, amplification: number, scale: number): void;
    createModifiers(amplifier: number, consumer: (param0: Holder<Attribute>, param1: AttributeModifier) => void): void;
    createParticleOptions(mobEffectInstance: MobEffectInstance): ParticleOptions;
    getBlendInDurationTicks(): number;
    getBlendOutAdvanceTicks(): number;
    getBlendOutDurationTicks(): number;
    getCategory(): MobEffectCategory;
    getColor(): number;
    getDescriptionId(): string;
    getDisplayName(): Component;
    getOrCreateDescriptionId(): string;
    isBeneficial(): boolean;
    isEnabled(enabledFeatures: FeatureFlagSet): boolean;
    isInstantenous(): boolean;
    onEffectAdded(arg0: MobEffectInstance, arg1: LivingEntity): void;
    onEffectAdded(mob: LivingEntity, amplifier: number): void;
    onEffectRemoved(arg0: MobEffectInstance, arg1: LivingEntity): void;
    onEffectStarted(arg0: MobEffectInstance, arg1: LivingEntity): void;
    onEffectStarted(mob: LivingEntity, amplifier: number): void;
    onMobHurt(level: ServerLevel, mob: LivingEntity, amplifier: number, source: DamageSource, damage: number): void;
    onMobRemoved(level: ServerLevel, mob: LivingEntity, amplifier: number, reason: Entity$RemovalReason): void;
    removeAttributeModifiers(attributes: AttributeMap): void;
    requiredFeatures(): FeatureFlagSet;
    requiredFeatures(flags: FeatureFlag[]): MobEffect;
    setBlendDuration(ticks: number): MobEffect;
    setBlendDuration(inTicks: number, outTicks: number, outAdvanceTicks: number): MobEffect;
    shouldApplyEffectTickThisTick(tickCount: number, amplification: number): boolean;
    withSoundOnAdded(soundEvent: SoundEvent): MobEffect;
}