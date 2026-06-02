import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { EquipmentSlot } from '../../../../../net/minecraft/world/entity/EquipmentSlot.d.ts'
import type { Attribute } from '../../../../../net/minecraft/world/entity/ai/attributes/Attribute.d.ts'
import type { AttributeModifier } from '../../../../../net/minecraft/world/entity/ai/attributes/AttributeModifier.d.ts'
import type { ItemAttributeModifiers$Display } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Display.d.ts'
export class ItemAttributeModifiers$Entry extends Record {
    static CODEC: Codec<ItemAttributeModifiers$Entry>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemAttributeModifiers$Entry>;
    constructor(attribute: Holder<Attribute>, modifier: AttributeModifier, slot: EquipmentSlot[])
    constructor(attribute: Holder<Attribute>, modifier: AttributeModifier, slot: EquipmentSlot[], display: ItemAttributeModifiers$Display)
    // private attribute: Holder<Attribute>;
    // private display: ItemAttributeModifiers$Display;
    // private modifier: AttributeModifier;
    // private slot: EquipmentSlot[];
    attribute(): Holder<Attribute>;
    display(): ItemAttributeModifiers$Display;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(attribute: Holder<Attribute>, id: Identifier): boolean;
    modifier(): AttributeModifier;
    slot(): EquipmentSlot[];
    toString(): string;
}