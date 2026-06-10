import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EnchantedItemInUse } from '../../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { LevelBasedValue } from '../../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { EnchantmentEntityEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentEntityEffect.d.ts'
import type { EnchantmentLocationBasedEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentLocationBasedEffect.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class ApplyEntityImpulse extends Record implements EnchantmentEntityEffect {
    static CODEC: Codec<EnchantmentEntityEffect>;
    static CODEC: Codec<EnchantmentLocationBasedEffect>;
    static CODEC: MapCodec<ApplyEntityImpulse>;
    static bootstrap(paramregistry: MapCodec<EnchantmentEntityEffect>[]): MapCodec<EnchantmentEntityEffect>;
    constructor(direction: Vec3, coordinateScale: Vec3, magnitude: LevelBasedValue)
    // private coordinateScale: Vec3;
    // private direction: Vec3;
    // private magnitude: LevelBasedValue;
    apply(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3): void;
    codec(): MapCodec<ApplyEntityImpulse>;
    coordinateScale(): Vec3;
    direction(): Vec3;
    equals(o: Object | null): boolean;
    hashCode(): number;
    magnitude(): LevelBasedValue;
    onChangedBlock(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3, becameActive: boolean): void;
    toString(): string;
}