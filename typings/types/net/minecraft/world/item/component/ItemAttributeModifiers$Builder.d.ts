import type { ImmutableList$Builder } from '../../../../../com/google/common/collect/ImmutableList$Builder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Attribute } from '../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { ItemAttributeModifiers } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers.d.ts'
import type { ItemAttributeModifiers$Display } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Display.d.ts'
import type { ItemAttributeModifiers$Entry } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Entry.d.ts'
export class ItemAttributeModifiers$Builder extends Object {
    private constructor()
    // private entries: ImmutableList$Builder<ItemAttributeModifiers$Entry>;
    add(attribute: Holder<Attribute>, modifier: AttributeModifier, slot: EquipmentSlot[]): ItemAttributeModifiers$Builder;
    add(attribute: Holder<Attribute>, modifier: AttributeModifier, slot: EquipmentSlot[], display: ItemAttributeModifiers$Display): ItemAttributeModifiers$Builder;
    build(): ItemAttributeModifiers;
}