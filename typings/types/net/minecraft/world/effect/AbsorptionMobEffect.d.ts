import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectCategory } from '../../../../net/minecraft/world/effect/MobEffectCategory.d.ts'
import type { MobEffectInstance } from '../../../../net/minecraft/world/effect/MobEffectInstance.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class AbsorptionMobEffect extends MobEffect {
    static CODEC: Codec<Object>;
    static FILTERED_REGISTRIES: (Object | null)[];
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(category: MobEffectCategory, color: number)
    applyEffectTick(level: ServerLevel, mob: LivingEntity, amplification: number): boolean;
    onEffectStarted(arg0: MobEffectInstance, arg1: LivingEntity): void;
    onEffectStarted(mob: LivingEntity, amplifier: number): void;
    shouldApplyEffectTickThisTick(tickCount: number, amplification: number): boolean;
}