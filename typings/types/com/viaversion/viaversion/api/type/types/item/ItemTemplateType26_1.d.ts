import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { ItemType1_20_5 } from '../../../../../../../com/viaversion/viaversion/api/type/types/item/ItemType1_20_5.d.ts'
import type { StructuredDataTypeBase } from '../../../../../../../com/viaversion/viaversion/api/type/types/item/StructuredDataTypeBase.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ItemTemplateType26_1 extends ItemType1_20_5 {
    constructor(arg0: StructuredDataTypeBase)
    read(arg0: ByteBuf): Item;
    write(arg0: ByteBuf, arg1: Item): void;
}