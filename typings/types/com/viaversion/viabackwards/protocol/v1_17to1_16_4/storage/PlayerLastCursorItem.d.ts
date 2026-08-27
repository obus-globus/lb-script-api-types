import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PlayerLastCursorItem extends Object {
    constructor()
    readonly lastCursorItem: Item;
    getLastCursorItem(): Item;
    isSet(): boolean;
    setLastCursorItem(arg0: Item): void;
    setLastCursorItem(arg0: Item, arg1: number): void;
}