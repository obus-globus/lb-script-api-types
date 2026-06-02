import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ItemVariant } from '../../../../../../net/fabricmc/fabric/api/transfer/v1/item/ItemVariant.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentPatch } from '../../../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { TypedDataComponent } from '../../../../../../net/minecraft/core/component/TypedDataComponent.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { ItemLike } from '../../../../../../net/minecraft/world/level/ItemLike.d.ts'
export class ItemVariantImpl extends Object implements ItemVariant {
    static CODEC: Codec<ItemVariant>;
    static PACKET_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemVariant>;
    static blank(): ItemVariant;
    static getMaxStackSize(paramarg0: ItemVariant): number;
    static of(paramarg0: ItemStack): ItemVariant;
    static of(paramarg0: ItemLike): ItemVariant;
    static of(paramarg0: ItemLike, paramarg1: DataComponentPatch): ItemVariant;
    static of(paramarg0: Holder<Item>, paramarg1: DataComponentPatch): ItemVariant;
    static of(paramarg0: Item, paramarg1: DataComponentPatch): ItemVariant;
    constructor(arg0: Item, arg1: DataComponentPatch)
    readonly cachedStack: ItemStack;
    readonly components: DataComponentPatch;
    // private hashCode: number;
    readonly item: Item;
    equals(arg0: Object | null): boolean;
    getCachedStack(): ItemStack;
    getComponents(): TypedDataComponent<Object>[];
    getComponentsPatch(): DataComponentPatch;
    getItem(): Item;
    getObject(): Item;
    hashCode(): number;
    isBlank(): boolean;
    matches(arg0: ItemStack): boolean;
    toStack(): ItemStack;
    toStack(arg0: number): ItemStack;
    toString(): string;
    typeHolder(): Holder<Item>;
    withComponents(arg0: DataComponentPatch): ItemVariant;
}