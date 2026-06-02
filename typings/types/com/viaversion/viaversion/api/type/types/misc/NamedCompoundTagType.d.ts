import type { Tag } from '../../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Map$Entry } from '../../../../../../../java/util/Map$Entry.d.ts'
export class NamedCompoundTagType extends Type<Map$Entry<string, Tag>[]> {
    static read(paramarg0: ByteBuf, paramarg1: number, paramarg2: boolean): Map$Entry<string, Tag>[];
    static write(paramarg0: ByteBuf, paramarg1: Tag, paramarg2: string): void;
    constructor()
    read(arg0: ByteBuf): Map$Entry<string, Tag>[];
    write(arg0: ByteBuf, arg1: Map$Entry<string, Tag>[]): void;
}