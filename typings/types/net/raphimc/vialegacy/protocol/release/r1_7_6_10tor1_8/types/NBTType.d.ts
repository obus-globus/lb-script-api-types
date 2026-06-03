import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class NBTType extends Type<Map$Entry<string, Tag>[]> {
    constructor()
    read(arg0: ByteBuf): Map$Entry<string, Tag>[];
    write(arg0: Ops, arg1: Map$Entry<string, Tag>[]): void;
    write(arg0: ByteBuf, arg1: Map$Entry<string, Tag>[]): void;
}