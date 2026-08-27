import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LegacyItemRewriter$RewriteEntry extends Record {
    private constructor(oldItemId: number, oldItemMeta: number, newItemId: number, newItemMeta: number, newItemName: string)
    // private newItemId: number;
    // private newItemMeta: number;
    // private newItemName: string;
    // private oldItemId: number;
    // private oldItemMeta: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    newItemId(): number;
    newItemMeta(): number;
    newItemName(): string;
    oldItemId(): number;
    oldItemMeta(): number;
    rewrites(arg0: Item): boolean;
    toString(): string;
}