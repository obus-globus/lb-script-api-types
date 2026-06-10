import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class Repairable extends Record {
    static CODEC: Codec<Repairable>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, Repairable>;
    constructor(items: Holder<Item>[])
    // private items: Holder<Item>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    isValidRepairItem(repairItemStack: ItemStack): boolean;
    items(): Holder<Item>[];
    toString(): string;
}