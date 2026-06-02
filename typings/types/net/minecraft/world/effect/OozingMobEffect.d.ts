import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ToIntFunction } from '../../../../java/util/function/ToIntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ServerLevel } from '../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { RandomSource } from '../../../../net/minecraft/util/RandomSource.d.ts'
import type { MobEffect } from '../../../../net/minecraft/world/effect/MobEffect.d.ts'
import type { MobEffectCategory } from '../../../../net/minecraft/world/effect/MobEffectCategory.d.ts'
import type { Entity$RemovalReason } from '../../../../net/minecraft/world/entity/Entity$RemovalReason.d.ts'
import type { LivingEntity } from '../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class OozingMobEffect extends MobEffect {
    static CODEC: Codec<Object>;
    static FILTERED_REGISTRIES: (Object | null)[];
    static SLIME_SIZE: number;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Object>;
    constructor(category: MobEffectCategory, color: number, spawnedCount: (param0: RandomSource) => kotlin.Int)
    // private spawnedCount: (param0: RandomSource) => kotlin.Int;
    onMobRemoved(level: ServerLevel, mob: LivingEntity, amplifier: number, reason: Entity$RemovalReason): void;
    // private spawnSlimeOffspring(level: Level, x: number, y: number, z: number): void;
}