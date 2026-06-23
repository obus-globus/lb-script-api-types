import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../net/minecraft/core/Holder.d.ts'
import type { DataComponentPatch } from '../../../../net/minecraft/core/component/DataComponentPatch.d.ts'
import type { DataComponentType } from '../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { RegistryFriendlyByteBuf } from '../../../../net/minecraft/network/RegistryFriendlyByteBuf.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Item } from '../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemInstance } from '../../../../net/minecraft/world/item/ItemInstance.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ItemStackTemplate extends Record implements ItemInstance {
    static CODEC: Codec<ItemStackTemplate>;
    static FIELD_COMPONENTS: string;
    static FIELD_COUNT: string;
    static FIELD_ID: string;
    static MAP_CODEC: MapCodec<ItemStackTemplate>;
    static STREAM_CODEC: StreamCodec<RegistryFriendlyByteBuf, ItemStackTemplate>;
    static fromNonEmptyStack(paramitemStack: ItemStack): ItemStackTemplate;
    // private components: DataComponentPatch;
    // private count: number;
    // private item: Holder<Item>;
    apply(count: number, additionalPatch: DataComponentPatch): ItemStack;
    apply(additionalPatch: DataComponentPatch): ItemStack;
    components(): DataComponentPatch;
    count(): number;
    create(): ItemStack;
    equals(o: Object | null): boolean;
    get<T extends unknown>(type: DataComponentType<T>): T;
    getMaxStackSize(): number;
    hashCode(): number;
    item(): Holder<Item>;
    toString(): string;
    typeHolder(): Holder<Item>;
    // private validate(result: ItemStack): ItemStack;
    withCount(count: number): ItemStackTemplate;
}