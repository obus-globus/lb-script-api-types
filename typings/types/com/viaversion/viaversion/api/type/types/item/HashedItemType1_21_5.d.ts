import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { HashedItem } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/HashedItem.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class HashedItemType1_21_5 extends Type<HashedItem> {
    constructor()
    read(arg0: ByteBuf): HashedItem;
    write(arg0: Ops, arg1: HashedItem): void;
    write(arg0: ByteBuf, arg1: HashedItem): void;
}