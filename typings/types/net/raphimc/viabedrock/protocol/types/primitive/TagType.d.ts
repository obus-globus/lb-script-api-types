import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class TagType extends Type<Tag> {
    constructor()
    read(arg0: ByteBuf): Tag;
    write(arg0: ByteBuf, arg1: Tag): void;
}