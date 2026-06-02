import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DataComponentType } from '../../../../../net/minecraft/core/component/DataComponentType.d.ts'
import type { CompoundTag } from '../../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { StreamCodec } from '../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CustomData extends Object {
    static CODEC: Codec<CustomData>;
    static COMPOUND_TAG_CODEC: Codec<CompoundTag>;
    static EMPTY: CustomData;
    static STREAM_CODEC: StreamCodec<ByteBuf, CustomData>;
    static of(paramtag: CompoundTag): CustomData;
    static set(paramcomponent: DataComponentType<CustomData>, paramitemStack: ItemStack, paramtag: CompoundTag): void;
    static update(paramcomponent: DataComponentType<CustomData>, paramitemStack: ItemStack, paramconsumer: (param0: CompoundTag) => void): void;
    private constructor(tag: CompoundTag)
    // private tag: CompoundTag;
    copyTag(): CompoundTag;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    matchedBy(expectedTag: CompoundTag): boolean;
    toString(): string;
    update(consumer: (param0: CompoundTag) => void): CustomData;
}