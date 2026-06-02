import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StoredObject } from '../../../../../com/viaversion/viaversion/api/connection/StoredObject.d.ts'
import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { BedrockItem } from '../../../../../net/raphimc/viabedrock/protocol/model/BedrockItem.d.ts'
import type { ItemEntry } from '../../../../../net/raphimc/viabedrock/protocol/model/ItemEntry.d.ts'
export class ItemRewriter extends StoredObject {
    constructor(arg0: UserConnection, arg1: ItemEntry[])
    // private blockItemValidBlockStates: Int2ObjectMap<(Object | null)[]>;
    readonly componentItems: string[];
    // private itemArrayType: Type<BedrockItem[]>;
    // private itemType: Type<BedrockItem>;
    readonly items: { [key: string]: number };
    bedrockItem(arg0: Item): BedrockItem;
    bedrockItems(arg0: Item[]): BedrockItem[];
    getComponentItems(): string[];
    getItems(): { [key: string]: number };
    itemArrayType(): Type<BedrockItem[]>;
    itemType(): Type<BedrockItem>;
    javaItem(arg0: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    javaItem(arg0: BedrockItem): Item;
    javaItems(arg0: BedrockItem[]): Item[];
}