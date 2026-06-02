import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { BaseItemArrayType } from '../../../../../../../com/viaversion/viaversion/api/type/types/item/BaseItemArrayType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ItemShortArrayType1_8 extends BaseItemArrayType {
    constructor()
    read(arg0: ByteBuf): Item[];
    write(arg0: ByteBuf, arg1: Item[]): void;
}