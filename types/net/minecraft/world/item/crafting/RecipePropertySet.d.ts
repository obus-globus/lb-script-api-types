import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class RecipePropertySet extends Object {
    static BLAST_FURNACE_INPUT: ResourceKey<RecipePropertySet>;
    static CAMPFIRE_INPUT: ResourceKey<RecipePropertySet>;
    static EMPTY: RecipePropertySet;
    static FURNACE_INPUT: ResourceKey<RecipePropertySet>;
    static SMITHING_ADDITION: ResourceKey<RecipePropertySet>;
    static SMITHING_BASE: ResourceKey<RecipePropertySet>;
    static SMITHING_TEMPLATE: ResourceKey<RecipePropertySet>;
    static SMOKER_INPUT: ResourceKey<RecipePropertySet>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, RecipePropertySet>;
    static TYPE_KEY: ResourceKey<Object>;
    private constructor(items: Holder<Item>[])
    // private items: Holder<Item>[];
    test(itemStack: ItemStack): boolean;
}