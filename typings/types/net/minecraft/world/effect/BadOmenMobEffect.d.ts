import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectCategory } from '../../../../net/minecraft/world/effect/MobEffectCategory.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { FeatureElement } from '../../../../net/minecraft/world/flag/FeatureElement.d.ts'
export class BadOmenMobEffect extends MobEffect {
    static CODEC: Codec<Holder<MobEffect>>;
    static FILTERED_REGISTRIES: ResourceKey<FeatureElement[]>[];
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Holder<MobEffect>>;
    constructor(category: MobEffectCategory, color: number)
    applyEffectTick(level: ServerLevel, mob: LivingEntity, amplification: number): boolean;
    shouldApplyEffectTickThisTick(remainingDuration: number, amplification: number): boolean;
}