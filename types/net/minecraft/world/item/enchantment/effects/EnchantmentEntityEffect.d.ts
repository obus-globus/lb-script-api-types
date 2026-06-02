import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EnchantedItemInUse } from '../../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { EnchantmentLocationBasedEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentLocationBasedEffect.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export interface EnchantmentEntityEffect extends Object, EnchantmentLocationBasedEffect{
    apply(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3): void;
    codec(): MapCodec<EnchantmentEntityEffect>;
    onChangedBlock(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3, becameActive: boolean): void;
    onDeactivated(item: EnchantedItemInUse, entity: Entity, position: Vec3, level: number): void;
}