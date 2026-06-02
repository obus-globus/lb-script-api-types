import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ItemType extends Type<Item> {
    constructor()
    read(arg0: ByteBuf): Item;
    write(arg0: ByteBuf, arg1: Item): void;
}