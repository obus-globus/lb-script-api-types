import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MinMaxBounds$Doubles } from '../../../../../net/minecraft/advancements/criterion/MinMaxBounds$Doubles.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { AttributeModifier$Operation } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier$Operation.d.ts'
import type { ItemAttributeModifiers$Entry } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Entry.d.ts'
export class AttributeModifiersPredicate$EntryPredicate extends Record implements Predicate<ItemAttributeModifiers$Entry> {
    static CODEC: Codec<AttributeModifiersPredicate$EntryPredicate>;
    static isEqual(paramarg0: Object): (param0: Object | null) => kotlin.Boolean;
    static not(paramarg0: (param0: Object | null) => kotlin.Boolean): (param0: Object | null) => kotlin.Boolean;
    constructor(attribute: Optional<Holder<T>[]>, id: Optional<Identifier>, amount: MinMaxBounds$Doubles, operation: Optional<AttributeModifier$Operation>, slot: Optional<EquipmentSlot[]>)
    // private amount: MinMaxBounds$Doubles;
    // private attribute: Optional<Holder<T>[]>;
    // private id: Optional<Identifier>;
    // private operation: Optional<AttributeModifier$Operation>;
    // private slot: Optional<EquipmentSlot[]>;
    amount(): MinMaxBounds$Doubles;
    and(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    attribute(): Optional<Holder<T>[]>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Optional<Identifier>;
    negate(): (param0: T) => kotlin.Boolean;
    operation(): Optional<AttributeModifier$Operation>;
    or(arg0: (param0: T) => kotlin.Boolean): (param0: T) => kotlin.Boolean;
    slot(): Optional<EquipmentSlot[]>;
    test(value: ItemAttributeModifiers$Entry): boolean;
    toString(): string;
}