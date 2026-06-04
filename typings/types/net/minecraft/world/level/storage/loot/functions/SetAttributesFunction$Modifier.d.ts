import type { Codec } from '../../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ContextKey } from '../../../../../../../net/minecraft/util/context/ContextKey.d.ts'
import type { EquipmentSlot } from '../../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Attribute } from '../../../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier$Operation } from '../../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier$Operation.d.ts'
import type { LootContextUser } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContextUser.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class SetAttributesFunction$Modifier extends Record implements LootContextUser {
    static CODEC: Codec<SetAttributesFunction$Modifier>;
    private constructor(id: Identifier, attribute: Holder<Attribute>, operation: AttributeModifier$Operation, amount: NumberProvider, slots: EquipmentSlot[][])
    // private amount: NumberProvider;
    // private attribute: Holder<Attribute>;
    // private id: Identifier;
    // private operation: AttributeModifier$Operation;
    // private slots: EquipmentSlot[][];
    amount(): NumberProvider;
    attribute(): Holder<Attribute>;
    equals(o: Object | null): boolean;
    getReferencedContextParams(): ContextKey<Object>[];
    hashCode(): number;
    id(): Identifier;
    operation(): AttributeModifier$Operation;
    slots(): EquipmentSlot[][];
    toString(): string;
    validate(context: ValidationContext): void;
}