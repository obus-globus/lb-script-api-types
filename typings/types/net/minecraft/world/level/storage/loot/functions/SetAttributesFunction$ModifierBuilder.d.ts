import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { EquipmentSlot } from '../../../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Attribute } from '../../../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier$Operation } from '../../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier$Operation.d.ts'
import type { SetAttributesFunction$Modifier } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetAttributesFunction$Modifier.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class SetAttributesFunction$ModifierBuilder extends Object {
    constructor(id: Identifier, attribute: Holder<Attribute>, operation: AttributeModifier$Operation, amount: NumberProvider)
    // private amount: NumberProvider;
    // private attribute: Holder<Attribute>;
    // private id: Identifier;
    // private operation: AttributeModifier$Operation;
    // private slots: EquipmentSlot[][];
    build(): SetAttributesFunction$Modifier;
    forSlot(slot: EquipmentSlot[]): SetAttributesFunction$ModifierBuilder;
}