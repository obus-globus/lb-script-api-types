import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ExplosionParticleInfo } from '../../../../../../net/minecraft/core/particles/ExplosionParticleInfo.d.ts'
import type { ParticleOptions } from '../../../../../../net/minecraft/core/particles/ParticleOptions.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { SoundEvent } from '../../../../../../net/minecraft/sounds/SoundEvent.d.ts'
import type { WeightedList } from '../../../../../../net/minecraft/util/random/WeightedList.d.ts'
import type { DamageSource } from '../../../../../../net/minecraft/world/damagesource/DamageSource.d.ts'
import type { DamageType } from '../../../../../../net/minecraft/world/damagesource/DamageType.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EnchantedItemInUse } from '../../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { LevelBasedValue } from '../../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { EnchantmentEntityEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentEntityEffect.d.ts'
import type { Level$ExplosionInteraction } from '../../../../../../net/minecraft/world/level/Level$ExplosionInteraction.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ExplodeEffect extends Record implements EnchantmentEntityEffect {
    static CODEC: MapCodec<ExplodeEffect>;
    static bootstrap(paramregistry: MapCodec<EnchantmentEntityEffect>[]): MapCodec<EnchantmentEntityEffect>;
    constructor(attributeToUser: boolean, damageType: Optional<Holder<DamageType>>, knockbackMultiplier: Optional<LevelBasedValue>, immuneBlocks: Optional<Holder<Block>[]>, offset: Vec3, radius: LevelBasedValue, createFire: boolean, blockInteraction: Level$ExplosionInteraction, smallParticle: ParticleOptions, largeParticle: ParticleOptions, blockParticles: WeightedList<ExplosionParticleInfo>, sound: Holder<SoundEvent>)
    // private attributeToUser: boolean;
    // private blockInteraction: Level$ExplosionInteraction;
    // private blockParticles: WeightedList<ExplosionParticleInfo>;
    // private createFire: boolean;
    // private damageType: Optional<Holder<DamageType>>;
    // private immuneBlocks: Optional<Holder<Block>[]>;
    // private knockbackMultiplier: Optional<LevelBasedValue>;
    // private largeParticle: ParticleOptions;
    // private offset: Vec3;
    // private radius: LevelBasedValue;
    // private smallParticle: ParticleOptions;
    // private sound: Holder<SoundEvent>;
    apply(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3): void;
    attributeToUser(): boolean;
    blockInteraction(): Level$ExplosionInteraction;
    blockParticles(): WeightedList<ExplosionParticleInfo>;
    codec(): MapCodec<ExplodeEffect>;
    createFire(): boolean;
    damageType(): Optional<Holder<DamageType>>;
    equals(o: Object | null): boolean;
    // private getDamageSource(entity: Entity, position: Vec3): DamageSource;
    hashCode(): number;
    immuneBlocks(): Optional<Holder<Block>[]>;
    knockbackMultiplier(): Optional<LevelBasedValue>;
    largeParticle(): ParticleOptions;
    offset(): Vec3;
    onChangedBlock(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3, becameActive: boolean): void;
    radius(): LevelBasedValue;
    smallParticle(): ParticleOptions;
    sound(): Holder<SoundEvent>;
    toString(): string;
}