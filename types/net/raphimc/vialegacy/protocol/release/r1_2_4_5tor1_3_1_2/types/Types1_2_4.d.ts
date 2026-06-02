import type { Chunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Types1_2_4 extends Object {
    static CHUNK: Type<Chunk>;
    static NBT_ITEM: Type<Item>;
    static NBT_ITEM_ARRAY: Type<(Object | null)[]>;
    constructor()
}