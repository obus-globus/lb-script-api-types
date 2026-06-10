import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { UnaryOperator } from '../../../../../java/util/function/UnaryOperator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentExactPredicate } from '../../../../../net/minecraft/core/component/DataComponentExactPredicate.d.ts'
import type { DataComponentExactPredicate$Builder } from '../../../../../net/minecraft/core/component/DataComponentExactPredicate$Builder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemCost extends Record {
    static CODEC: Codec<ItemCost>;
    static OPTIONAL_STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Optional<ItemCost>>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemCost>;
    // private components: DataComponentExactPredicate;
    // private count: number;
    // private item: Holder<Item>;
    // private itemStack: ItemStack;
    components(): DataComponentExactPredicate;
    count(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    item(): Holder<Item>;
    itemStack(): ItemStack;
    test(itemStack: ItemStack): boolean;
    toString(): string;
    withComponents(components: (param0: DataComponentExactPredicate$Builder) => Object | null): ItemCost;
}