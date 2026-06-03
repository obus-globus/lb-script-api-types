import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ArrayType } from '../../../../../../../com/viaversion/viaversion/api/type/types/ArrayType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ContainterContents$ContainerContentsType extends ArrayType<Item> {
    static getArrayClass(paramarg0: Class<Object>): Class<Object>;
    constructor(arg0: Type<Item>)
    // private itemType: Type<Item>;
    write(arg0: Ops, arg1: Item[]): void;
    write(arg0: ByteBuf, arg1: Item[]): void;
}