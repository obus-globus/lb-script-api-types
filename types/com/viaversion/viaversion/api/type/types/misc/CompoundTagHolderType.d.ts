import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { HolderType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class CompoundTagHolderType extends HolderType<Map$Entry<string, Tag>[]> {
    constructor()
    readDirect(arg0: ByteBuf): Map$Entry<string, Tag>[];
    writeDirect(arg0: ByteBuf, arg1: Map$Entry<string, Tag>[]): void;
}