import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerLastCursorItem extends Object implements StorableObject {
    constructor()
    readonly lastCursorItem: Item;
    getLastCursorItem(): Item;
    isSet(): boolean;
    onRemove(): void;
    setLastCursorItem(arg0: Item): void;
    setLastCursorItem(arg0: Item, arg1: number): void;
}