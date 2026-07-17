import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { BedrockItem } from '../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
import type { ItemEntry } from '../../../../../net/raphimc/viabedrock/protocol/model/ItemEntry.d.ts'
export class ItemRewriter extends StoredObject {
    constructor(arg0: UserConnection, arg1: ItemEntry[])
    // private blockItemValidBlockStates: JavaMap<any, any>;
    readonly componentItems: string[];
    // private itemArrayType: Type<BedrockItem[]>;
    // private itemType: Type<BedrockItem>;
    readonly items: JavaMap<string, number>;
    // private newItemArrayType: Type<BedrockItem[]>;
    // private newItemType: Type<BedrockItem>;
    // private optionalItemType: Type<BedrockItem>;
    // private optionalNewItemType: Type<BedrockItem>;
    bedrockItem(arg0: Item): BedrockItem;
    bedrockItems(arg0: Item[]): BedrockItem[];
    getComponentItems(): string[];
    getItems(): JavaMap<string, number>;
    itemArrayType(): Type<BedrockItem[]>;
    itemType(): Type<BedrockItem>;
    javaItem(arg0: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    javaItem(arg0: BedrockItem): Item;
    javaItems(arg0: BedrockItem[]): Item[];
    newItemArrayType(): Type<BedrockItem[]>;
    newItemType(): Type<BedrockItem>;
    optionalItemType(): Type<BedrockItem>;
    optionalNewItemType(): Type<BedrockItem>;
}