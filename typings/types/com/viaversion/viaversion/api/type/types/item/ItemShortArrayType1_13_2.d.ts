import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { BaseItemArrayType } from '../../../../../../../com/viaversion/viaversion/api/type/types/item/BaseItemArrayType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ItemShortArrayType1_13_2 extends BaseItemArrayType {
    constructor()
    read(arg0: ByteBuf): Item[];
    write(arg0: Ops, arg1: Item[]): void;
    write(arg0: ByteBuf, arg1: Item[]): void;
}