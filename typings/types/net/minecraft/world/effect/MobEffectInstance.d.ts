import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Int2IntFunction } from '../../../../it/unimi/dsi/fastutil/ints/Int2IntFunction.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { ParticleOptions } from '../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageSource } from '../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectInstance$BlendState } from '../../../../net/minecraft/world/effect/MobEffectInstance$BlendState.d.ts'
import type { MobEffectInstance$Details } from '../../../../net/minecraft/world/effect/MobEffectInstance$Details.d.ts'
import type { Entity$RemovalReason } from '../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
export class MobEffectInstance extends Object implements Comparable<MobEffectInstance> {
    static CODEC: Codec<MobEffectInstance>;
    static INFINITE_DURATION: number;
    static MAX_AMPLIFIER: number;
    static MIN_AMPLIFIER: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, MobEffectInstance>;
    constructor(effect: Holder<MobEffect>)
    constructor(effect: Holder<MobEffect>, duration: number)
    constructor(effect: Holder<MobEffect>, duration: number, amplifier: number)
    constructor(effect: Holder<MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean)
    constructor(effect: Holder<MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean)
    constructor(effect: Holder<MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean, hiddenEffect: MobEffectInstance)
    constructor(copy: MobEffectInstance)
    readonly ambient: boolean;
    readonly amplifier: number;
    // private blendState: MobEffectInstance$BlendState;
    readonly duration: number;
    readonly effect: Holder<MobEffect>;
    // private hiddenEffect: MobEffectInstance;
    // private showIcon: boolean;
    readonly visible: boolean;
    // private asDetails(): MobEffectInstance$Details;
    compareTo(o: MobEffectInstance): number;
    copyBlendState(instance: MobEffectInstance): void;
    // private describeDuration(): string;
    // private downgradeToHiddenEffect(): boolean;
    endsWithin(ticks: number): boolean;
    equals(o: Object | null): boolean;
    getAmplifier(): number;
    getBlendFactor(livingEntity: LivingEntity, partialTickTime: number): number;
    getDescriptionId(): string;
    getDuration(): number;
    getEffect(): Holder<MobEffect>;
    getParticleOptions(): ParticleOptions;
    // private hasRemainingDuration(): boolean;
    hashCode(): number;
    is(effect: Holder<MobEffect>): boolean;
    isAmbient(): boolean;
    isInfiniteDuration(): boolean;
    // private isShorterDurationThan(other: MobEffectInstance): boolean;
    isVisible(): boolean;
    mapDuration(mapper: (param0: number) => number): number;
    onEffectAdded(livingEntity: LivingEntity): void;
    onEffectStarted(mob: LivingEntity): void;
    onMobHurt(level: ServerLevel, mob: LivingEntity, source: DamageSource, damage: number): void;
    onMobRemoved(level: ServerLevel, mob: LivingEntity, reason: Entity$RemovalReason): void;
    // private setDetailsFrom(copy: MobEffectInstance): void;
    showIcon(): boolean;
    skipBlending(): void;
    tickClient(): void;
    // private tickDownDuration(): void;
    tickServer(serverLevel: ServerLevel, target: LivingEntity, onEffectUpdate: () => void): boolean;
    toString(): string;
    update(takeOver: MobEffectInstance): boolean;
    withScaledDuration(scale: number): MobEffectInstance;
}