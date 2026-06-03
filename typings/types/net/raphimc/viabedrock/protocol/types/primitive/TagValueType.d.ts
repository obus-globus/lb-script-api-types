import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Tag_Type } from '../../../../../../net/raphimc/viabedrock/protocol/data/enums/bedrock/generated/Tag_Type.d.ts'
export class TagValueType extends Type<Tag> {
    constructor(arg0: Tag_Type)
    // private tagType: Tag_Type;
    read(arg0: ByteBuf): Tag;
    write(arg0: Ops, arg1: Tag): void;
    write(arg0: ByteBuf, arg1: Tag): void;
}