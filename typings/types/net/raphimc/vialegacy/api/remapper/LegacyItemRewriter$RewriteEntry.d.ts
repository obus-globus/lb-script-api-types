import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LegacyItemRewriter$RewriteEntry extends Record {
    // private newItemID: number;
    // private newItemMeta: number;
    // private newItemName: string;
    // private oldItemID: number;
    // private oldItemMeta: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    newItemID(): number;
    newItemMeta(): number;
    newItemName(): string;
    oldItemID(): number;
    oldItemMeta(): number;
    rewrites(arg0: Item): boolean;
    toString(): string;
}