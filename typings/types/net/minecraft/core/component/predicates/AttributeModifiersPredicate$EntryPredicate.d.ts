import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../../net/minecraft/advancements/criterion/MinMaxBounds$Doubles.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Attribute } from '../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier$Operation } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier$Operation.d.ts'
import type { ItemAttributeModifiers$Entry } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Entry.d.ts'
export class AttributeModifiersPredicate$EntryPredicate extends Record implements Predicate<ItemAttributeModifiers$Entry> {
    static CODEC: Codec<AttributeModifiersPredicate$EntryPredicate>;
    static isEqual(paramarg0: Object): (param0: Object | null) => boolean;
    static not(paramarg0: (param0: Object) => boolean): (param0: Object | null) => boolean;
    constructor(attribute: Optional<Holder<Attribute>[]>, id: Optional<Identifier>, amount: MinMaxBounds$Doubles, operation: Optional<AttributeModifier$Operation>, slot: Optional<EquipmentSlot[]>)
    // private amount: MinMaxBounds$Doubles;
    // private attribute: Optional<Holder<Attribute>[]>;
    // private id: Optional<Identifier>;
    // private operation: Optional<AttributeModifier$Operation>;
    // private slot: Optional<EquipmentSlot[]>;
    amount(): MinMaxBounds$Doubles;
    and(arg0: (param0: ItemAttributeModifiers$Entry) => boolean): (param0: ItemAttributeModifiers$Entry) => boolean;
    attribute(): Optional<Holder<Attribute>[]>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Optional<Identifier>;
    negate(): (param0: ItemAttributeModifiers$Entry) => boolean;
    operation(): Optional<AttributeModifier$Operation>;
    or(arg0: (param0: ItemAttributeModifiers$Entry) => boolean): (param0: ItemAttributeModifiers$Entry) => boolean;
    slot(): Optional<EquipmentSlot[]>;
    test(value: ItemAttributeModifiers$Entry): boolean;
    toString(): string;
}