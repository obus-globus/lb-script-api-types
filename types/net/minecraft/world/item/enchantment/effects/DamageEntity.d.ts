import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { DamageType } from '../../../../../../net/minecraft/world/damagesource/DamageType.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EnchantedItemInUse } from '../../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { LevelBasedValue } from '../../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { EnchantmentEntityEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentEntityEffect.d.ts'
import type { EnchantmentLocationBasedEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentLocationBasedEffect.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class DamageEntity extends Record implements EnchantmentEntityEffect {
    static CODEC: Codec<EnchantmentEntityEffect>;
    static CODEC: Codec<EnchantmentLocationBasedEffect>;
    static CODEC: MapCodec<DamageEntity>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    constructor(minDamage: LevelBasedValue, maxDamage: LevelBasedValue, damageType: Holder<DamageType>)
    // private damageType: Holder<DamageType>;
    // private maxDamage: LevelBasedValue;
    // private minDamage: LevelBasedValue;
    apply(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3): void;
    codec(): MapCodec<DamageEntity>;
    damageType(): Holder<DamageType>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    maxDamage(): LevelBasedValue;
    minDamage(): LevelBasedValue;
    onChangedBlock(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3, becameActive: boolean): void;
    toString(): string;
}