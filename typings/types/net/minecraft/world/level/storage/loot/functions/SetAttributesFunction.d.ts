import type { MapCodec } from '../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Attribute } from '../../../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier$Operation } from '../../../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier$Operation.d.ts'
import type { ItemStack } from '../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemAttributeModifiers } from '../../../../../../../net/minecraft/world/item/component/ItemAttributeModifiers.d.ts'
import type { LootContext } from '../../../../../../../net/minecraft/world/level/storage/loot/LootContext.d.ts'
import type { ValidationContext } from '../../../../../../../net/minecraft/world/level/storage/loot/ValidationContext.d.ts'
import type { LootItemConditionalFunction } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/LootItemConditionalFunction.d.ts'
import type { SetAttributesFunction$Builder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetAttributesFunction$Builder.d.ts'
import type { SetAttributesFunction$Modifier } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetAttributesFunction$Modifier.d.ts'
import type { SetAttributesFunction$ModifierBuilder } from '../../../../../../../net/minecraft/world/level/storage/loot/functions/SetAttributesFunction$ModifierBuilder.d.ts'
import type { LootItemCondition } from '../../../../../../../net/minecraft/world/level/storage/loot/predicates/LootItemCondition.d.ts'
import type { NumberProvider } from '../../../../../../../net/minecraft/world/level/storage/loot/providers/number/NumberProvider.d.ts'
export class SetAttributesFunction extends LootItemConditionalFunction {
    static MAP_CODEC: MapCodec<SetAttributesFunction>;
    static modifier(paramid: Identifier, paramattribute: Holder<Attribute>, paramoperation: AttributeModifier$Operation, paramamount: NumberProvider): SetAttributesFunction$ModifierBuilder;
    static setAttributes(): SetAttributesFunction$Builder;
    private constructor(predicates: LootItemCondition[], modifiers: SetAttributesFunction$Modifier[], replace: boolean)
    // private modifiers: SetAttributesFunction$Modifier[];
    // private replace: boolean;
    codec(): MapCodec<SetAttributesFunction>;
    run(itemStack: ItemStack, context: LootContext): ItemStack;
    // private updateModifiers(context: LootContext, itemModifiers: ItemAttributeModifiers): ItemAttributeModifiers;
    validate(context: ValidationContext): void;
}