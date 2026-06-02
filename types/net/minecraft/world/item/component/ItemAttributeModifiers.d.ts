import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { DecimalFormat } from '../../../../../java/text/DecimalFormat.d.ts'
import type { BiConsumer } from '../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Attribute } from '../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { ItemAttributeModifiers$Builder } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Builder.d.ts'
import type { ItemAttributeModifiers$Display } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Display.d.ts'
import type { ItemAttributeModifiers$Entry } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Entry.d.ts'
import type { TriConsumer } from '../../../../../org/apache/commons/lang3/function/TriConsumer.d.ts'
export class ItemAttributeModifiers extends Record {
    static ATTRIBUTE_MODIFIER_FORMAT: DecimalFormat;
    static CODEC: Codec<ItemAttributeModifiers>;
    static EMPTY: ItemAttributeModifiers;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemAttributeModifiers>;
    static builder(): ItemAttributeModifiers$Builder;
    constructor(modifiers: ItemAttributeModifiers$Entry[])
    // private modifiers: ItemAttributeModifiers$Entry[];
    compute(attribute: Holder<Attribute>, baseValue: number, slot: EquipmentSlot): number;
    equals(o: Object | null): boolean;
    forEach(slot: EquipmentSlot, consumer: (param0: Holder<Attribute>, param1: AttributeModifier) => void): void;
    forEach(slot: EquipmentSlot[], consumer: (param0: Holder<Attribute>, param1: AttributeModifier) => void): void;
    forEach(slot: EquipmentSlot[], consumer: (param0: Holder<Attribute>, param1: AttributeModifier, param2: ItemAttributeModifiers$Display) => void): void;
    hashCode(): number;
    modifiers(): ItemAttributeModifiers$Entry[];
    toString(): string;
    withModifierAdded(attribute: Holder<Attribute>, modifier: AttributeModifier, slot: EquipmentSlot[]): ItemAttributeModifiers;
}