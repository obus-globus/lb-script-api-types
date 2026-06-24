import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { DataComponentGetter } from '../../../../net/minecraft/core/component/DataComponentGetter.d.ts'
import type { CompoundTag } from '../../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../../net/minecraft/nbt/Tag.d.ts'
import type { StreamCodec } from '../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { Entity } from '../../../../net/minecraft/world/entity/Entity.d.ts'
export class NbtPredicate extends Record {
    static CODEC: Codec<NbtPredicate>;
    static SELECTED_ITEM_TAG: string;
    static STREAM_CODEC: StreamCodec<ByteBuf, NbtPredicate>;
    static getEntityTagToCompare(paramentity: Entity): CompoundTag;
    constructor(tag: CompoundTag)
    // private tag: CompoundTag;
    equals(o: Object | null): boolean;
    hashCode(): number;
    matches(components: DataComponentGetter): boolean;
    matches(tag: Tag): boolean;
    matches(entity: Entity): boolean;
    tag(): CompoundTag;
    toString(): string;
}