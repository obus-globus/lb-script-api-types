import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CollectionPredicate } from '../../../../../net/minecraft/advancements/predicates/CollectionPredicate.d.ts'
import type { ItemPredicate } from '../../../../../net/minecraft/advancements/predicates/ItemPredicate.d.ts'
import type { SingleComponentItemPredicate } from '../../../../../net/minecraft/advancements/predicates/SingleComponentItemPredicate.d.ts'
import type { DataComponentGetter } from '../../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { DataComponentPredicate } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate.d.ts'
import type { DataComponentPredicate$Single } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Single.d.ts'
import type { DataComponentPredicate$Type } from '../../../../../net/minecraft/core/component/predicates/DataComponentPredicate$Type.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemInstance } from '../../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { BundleContents } from '../../../../../net/minecraft/world/item/component/BundleContents.d.ts'
export class BundlePredicate extends Record implements SingleComponentItemPredicate<BundleContents> {
    static CODEC: Codec<Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    static CODEC: Codec<BundlePredicate>;
    static SINGLE_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, DataComponentPredicate$Single<any>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Map<DataComponentPredicate$Type<any>, DataComponentPredicate>>;
    constructor(items: Optional<CollectionPredicate<ItemInstance, ItemPredicate>>)
    // private items: Optional<CollectionPredicate<ItemInstance, ItemPredicate>>;
    componentType(): DataComponentType<BundleContents>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    items(): Optional<CollectionPredicate<ItemInstance, ItemPredicate>>;
    matches(components: DataComponentGetter): boolean;
    matches(value: BundleContents): boolean;
    toString(): string;
}