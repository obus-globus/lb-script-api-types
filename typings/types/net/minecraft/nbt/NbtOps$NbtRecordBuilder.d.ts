import type { DataResult } from '../../../com/mojang/serialization/DataResult.d.ts'
import type { RecordBuilder$AbstractStringBuilder } from '../../../com/mojang/serialization/RecordBuilder$AbstractStringBuilder.d.ts'
import type { CompoundTag } from '../../../net/minecraft/nbt/CompoundTag.d.ts'
import type { Tag } from '../../../net/minecraft/nbt/Tag.d.ts'
export class NbtOps$NbtRecordBuilder extends RecordBuilder$AbstractStringBuilder<Tag, CompoundTag> {
    constructor(null_: NbtOps$NbtRecordBuilder)
    append(key: string, value: Tag, builder: CompoundTag): CompoundTag;
    build(builder: CompoundTag, prefix: Tag): DataResult<Tag>;
    initBuilder(): CompoundTag;
}