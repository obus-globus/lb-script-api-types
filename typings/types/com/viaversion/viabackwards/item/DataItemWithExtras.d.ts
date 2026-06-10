import type { StringTag } from '../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { DataItem } from '../../../../com/viaversion/viaversion/api/minecraft/item/DataItem.d.ts'
import type { Item } from '../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { JsonElement } from '../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
export class DataItemWithExtras extends DataItem {
    constructor(arg0: Item)
    // private lore: JsonElement[];
    // private name: JsonElement;
    lore(): JsonElement[];
    name(): JsonElement;
    // private parse(arg0: string): JsonElement;
    rawLore(): StringTag[];
    rawName(): StringTag;
}