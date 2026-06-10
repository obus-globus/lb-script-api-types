import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ParticleOptions } from '../../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { FloatProvider } from '../../../../../../net/minecraft/util/valueproviders/FloatProvider.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EnchantedItemInUse } from '../../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { EnchantmentEntityEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentEntityEffect.d.ts'
import type { EnchantmentLocationBasedEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentLocationBasedEffect.d.ts'
import type { SpawnParticlesEffect$PositionSource } from '../../../../../../net/minecraft/world/item/enchantment/effects/SpawnParticlesEffect$PositionSource.d.ts'
import type { SpawnParticlesEffect$VelocitySource } from '../../../../../../net/minecraft/world/item/enchantment/effects/SpawnParticlesEffect$VelocitySource.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class SpawnParticlesEffect extends Record implements EnchantmentEntityEffect {
    static CODEC: Codec<EnchantmentEntityEffect>;
    static CODEC: Codec<EnchantmentLocationBasedEffect>;
    static CODEC: MapCodec<SpawnParticlesEffect>;
    static bootstrap(paramregistry: MapCodec<EnchantmentEntityEffect>[]): MapCodec<EnchantmentEntityEffect>;
    static fixedVelocity(paramprovider: FloatProvider): SpawnParticlesEffect$VelocitySource;
    static inBoundingBox(): SpawnParticlesEffect$PositionSource;
    static movementScaled(paramscale: number): SpawnParticlesEffect$VelocitySource;
    static offsetFromEntityPosition(paramoffset: number): SpawnParticlesEffect$PositionSource;
    constructor(particle: ParticleOptions, horizontalPosition: SpawnParticlesEffect$PositionSource, verticalPosition: SpawnParticlesEffect$PositionSource, horizontalVelocity: SpawnParticlesEffect$VelocitySource, verticalVelocity: SpawnParticlesEffect$VelocitySource, speed: FloatProvider)
    // private horizontalPosition: SpawnParticlesEffect$PositionSource;
    // private horizontalVelocity: SpawnParticlesEffect$VelocitySource;
    // private particle: ParticleOptions;
    // private speed: FloatProvider;
    // private verticalPosition: SpawnParticlesEffect$PositionSource;
    // private verticalVelocity: SpawnParticlesEffect$VelocitySource;
    apply(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3): void;
    codec(): MapCodec<SpawnParticlesEffect>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    horizontalPosition(): SpawnParticlesEffect$PositionSource;
    horizontalVelocity(): SpawnParticlesEffect$VelocitySource;
    onChangedBlock(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3, becameActive: boolean): void;
    particle(): ParticleOptions;
    speed(): FloatProvider;
    toString(): string;
    verticalPosition(): SpawnParticlesEffect$PositionSource;
    verticalVelocity(): SpawnParticlesEffect$VelocitySource;
}