import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { HashedItem } from '../../../../../com/viaversion/viaversion/api/minecraft/item/HashedItem.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { Rewriter } from '../../../../../com/viaversion/viaversion/api/rewriter/Rewriter.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ItemRewriter<T extends Protocol<Object, Object, Object, Object>> extends Rewriter<T>, Object{
    handleHashedItem(arg0: UserConnection, arg1: HashedItem): HashedItem;
    handleItemToClient(arg0: UserConnection, arg1: Item): Item;
    handleItemToServer(arg0: UserConnection, arg1: Item): Item;
    itemArrayType(): Type<Item[]>;
    itemTemplateType(): Type<Item>;
    itemType(): Type<Item>;
    mappedItemArrayType(): Type<Item[]>;
    mappedItemTemplateType(): Type<Item>;
    mappedItemType(): Type<Item>;
    nbtTagName(): string;
    nbtTagName(arg0: string): string;
}