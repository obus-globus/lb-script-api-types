import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface StructuredItemRewriter$ItemHandler extends Object{
    rewrite(arg0: UserConnection, arg1: Item): Item;
}