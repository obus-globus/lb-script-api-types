import type { HashMultimap } from '../../../../../../com/google/common/collect/HashMultimap.d.ts'
import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { StringRepresentable } from '../../../../../../net/minecraft/util/StringRepresentable.d.ts'
import type { Entity } from '../../../../../../net/minecraft/world/entity/Entity.d.ts'
import type { EquipmentSlot } from '../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Attribute } from '../../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { AttributeModifier$Operation } from '../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier$Operation.d.ts'
import type { EnchantedItemInUse } from '../../../../../../net/minecraft/world/item/enchantment/EnchantedItemInUse.d.ts'
import type { LevelBasedValue } from '../../../../../../net/minecraft/world/item/enchantment/LevelBasedValue.d.ts'
import type { EnchantmentLocationBasedEffect } from '../../../../../../net/minecraft/world/item/enchantment/effects/EnchantmentLocationBasedEffect.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EnchantmentAttributeEffect extends Record implements EnchantmentLocationBasedEffect {
    static CODEC: Codec<EnchantmentLocationBasedEffect>;
    static MAP_CODEC: MapCodec<EnchantmentAttributeEffect>;
    constructor(id: Identifier, attribute: Holder<Attribute>, amount: LevelBasedValue, operation: AttributeModifier$Operation)
    // private amount: LevelBasedValue;
    // private attribute: Holder<Attribute>;
    // private id: Identifier;
    // private operation: AttributeModifier$Operation;
    amount(): LevelBasedValue;
    attribute(): Holder<Attribute>;
    codec(): MapCodec<EnchantmentAttributeEffect>;
    equals(o: Object | null): boolean;
    getModifier(level: number, slot: StringRepresentable): AttributeModifier;
    hashCode(): number;
    id(): Identifier;
    // private idForSlot(slot: StringRepresentable): Identifier;
    // private makeAttributeMap(enchantmentLevel: number, slot: EquipmentSlot): HashMultimap<Holder<Attribute>, AttributeModifier>;
    onChangedBlock(serverLevel: ServerLevel, enchantmentLevel: number, item: EnchantedItemInUse, entity: Entity, position: Vec3, becameActive: boolean): void;
    onDeactivated(item: EnchantedItemInUse, entity: Entity, position: Vec3, level: number): void;
    operation(): AttributeModifier$Operation;
    toString(): string;
}