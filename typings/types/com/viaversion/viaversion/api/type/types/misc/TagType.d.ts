import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class TagType extends Type<Tag> {
    constructor()
    constructor(arg0: boolean)
    // private maxBytes: number;
    read(arg0: ByteBuf): Tag;
    write(arg0: Ops, arg1: Tag): void;
    write(arg0: ByteBuf, arg1: Tag): void;
}