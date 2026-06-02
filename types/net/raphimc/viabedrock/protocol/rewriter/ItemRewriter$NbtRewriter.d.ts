import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockItem } from '../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
export interface ItemRewriter$NbtRewriter extends Object{
    toJava(arg0: UserConnection, arg1: BedrockItem, arg2: Item): void;
}