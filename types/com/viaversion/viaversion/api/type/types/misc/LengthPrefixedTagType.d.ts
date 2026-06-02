import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class LengthPrefixedTagType extends Type<Tag> {
    constructor(arg0: number)
    // private maxLength: number;
    read(arg0: ByteBuf): Tag;
    write(arg0: ByteBuf, arg1: Tag): void;
}