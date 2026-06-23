import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CollectionPredicate } from '../../../../../net/minecraft/advancements/criterion/CollectionPredicate.d.ts'
import type { SingleComponentItemPredicate } from '../../../../../net/minecraft/advancements/criterion/SingleComponentItemPredicate.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { AttributeModifiersPredicate$EntryPredicate } from '../../../../../net/minecraft/core/component/predicates/AttributeModifiersPredicate$EntryPredicate.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemAttributeModifiers } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers.d.ts'
import type { ItemAttributeModifiers$Entry } from '../../../../../net/minecraft/world/item/component/ItemAttributeModifiers$Entry.d.ts'
export class AttributeModifiersPredicate extends Record implements SingleComponentItemPredicate<ItemAttributeModifiers> {
    static CODEC: Codec<Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    static CODEC: Codec<AttributeModifiersPredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<any>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    constructor(modifiers: Optional<CollectionPredicate<ItemAttributeModifiers$Entry, AttributeModifiersPredicate$EntryPredicate>>)
    // private modifiers: Optional<CollectionPredicate<ItemAttributeModifiers$Entry, AttributeModifiersPredicate$EntryPredicate>>;
    componentType(): DataComponentType<ItemAttributeModifiers>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    matches(value: ItemAttributeModifiers): boolean;
    modifiers(): Optional<CollectionPredicate<ItemAttributeModifiers$Entry, AttributeModifiersPredicate$EntryPredicate>>;
    toString(): string;
}