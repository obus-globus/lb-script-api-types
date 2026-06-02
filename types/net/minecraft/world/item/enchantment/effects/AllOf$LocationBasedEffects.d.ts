import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EnchantedItemInUse } from '../../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { EnchantmentLocationBasedEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentLocationBasedEffect.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class AllOf$LocationBasedEffects extends Record implements EnchantmentLocationBasedEffect {
    static CODEC: Codec<EnchantmentLocationBasedEffect>;
    static CODEC: MapCodec<AllOf$LocationBasedEffects>;
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    constructor(effects: EnchantmentLocationBasedEffect[])
    // private effects: EnchantmentLocationBasedEffect[];
    codec(): MapCodec<AllOf$LocationBasedEffects>;
    effects(): EnchantmentLocationBasedEffect[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    onChangedBlock(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3, becameActive: boolean): void;
    onDeactivated(item: EnchantedItemInUse, entity: Entity, position: Vec3, level: number): void;
    onDeactivated(item: EnchantedItemInUse, entity: Entity, position: Vec3, level: number): void;
    toString(): string;
}